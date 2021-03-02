const Tour = ({ tour= {}, order }) => {
   let best = null;
   if (+tour?.rating > 4.5) {
      best = 'best_tour';
   }

   return <div className={`container ${best} tour-item`}>
      <div className={`order`}>{order}. </div>
      <div className={`special-offer`}>{tour?.isSpecialOffer ? "special offer" : ""}</div>
      <div className={`price`}>{tour?.currency} {tour?.price}</div>
      <div className={`title`}>{tour?.title}</div>
      <div className={`rating`}>{tour?.rating}</div>
   </div>
}

export default Tour;
