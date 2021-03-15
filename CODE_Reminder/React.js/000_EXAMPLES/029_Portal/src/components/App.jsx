import React from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
   constructor(props) {
      super(props);
      this.el = document.createElement('div');
   }

   componentDidMount() {
      /**
       * Элемент портала вставлен в дерево DOM после того, как потомки Modal были монтированы, что означает, что потомки
       * будут монтированы в отдельный узел DOM.
       * Если дочерний компонент требует присоединения к дереву DOM сразу после его монтирования, например, для измерения
       * узла DOM или использования «autoFocus» в потомке, добавьте состояние в Modal и отрисуйте дочерние элементы, после
       * того, как Modal будет вставлен в DOM дерево.
       */
      modalRoot.appendChild(this.el);
   }

   componentWillUnmount() {
      modalRoot.removeChild(this.el);
   }

   render() {
      return createPortal(
         this.props.children,
         this.el,
      );
   }
}

//----------------------------------------------------------------------------------------------------------------------

function Child() {
   /** Событие клика на этой кнопке будет всплывать к Parent, так как нет заданного 'onClick' атрибута */
   return (
      <div className="modal">
         <button>Click</button>
      </div>
   );
}

//----------------------------------------------------------------------------------------------------------------------

export default class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = { clicks: 0 };
      this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
      /** Он сработает, когда кнопка в Child будет нажата, обновляя состояние Parent, даже если кнопка не является его
       * прямым потомком в DOM. */
      this.setState(prevState => {
         console.log(prevState);
         return { clicks: prevState.clicks + 1 };
      });
   }

   render() {
      return (
         <div onClick={ this.handleClick }>
            <p>Число кликов: {this.state.clicks}</p>
            <p>Откройте DevTools браузера, чтобы увидеть, что кнопка button не является потомком div с обработчиком onClick.</p>
            <Modal>
               <Child />
            </Modal>
         </div>
      );
   }
}
