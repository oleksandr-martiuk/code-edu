import React from 'react';

class CustomTextInput2 extends React.Component {
   constructor(props) {
      super(props);

      this.textInput = null;

      this.setTextInputRef = element => {
         this.textInput = element;
      };

      this.focusTextInput = () => {
         // Устанавливаем фокус на текстовом поле ввода с помощью чистого DOM API
         if (this.textInput) {
            this.textInput.focus();
         }
      };
   }

   componentDidMount() {
      // устанавливаем фокус на input при монтировании
      this.focusTextInput();
   }

   render() {
      // Используем колбэк в `ref`, чтобы сохранить ссылку на DOM-элемент
      // поля текстового ввода в поле экземпляра (например, this.textInput).
      return (
         <div>
            <input
               type="text"
               ref={this.setTextInputRef}
            />
            <input
               type="button"
               value="Focus the text input"
               onClick={this.focusTextInput}
            />
         </div>
      );
   }
}

export default CustomTextInput2;
