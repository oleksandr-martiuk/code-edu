const Tour = ({ tour= {
   superOffer: false,
   rating: undefined
}, order }) => {
   const best_tour = (+tour?.rating > 4) ? 'best_tour' : '';

   return <div className={`container ${best_tour} tour-item`}>
      <div className={`order`}>{order}. </div>
      <div className={`special-offer`}>{tour?.superOffer ? "special offer" : ""}</div>
      <div className={`price`}>{tour?.currency} {tour?.price}</div>
      <div className={`title`}>{tour?.title}</div>
      <div className={`rating`}>{tour?.rating}</div>
   </div>
}

export default Tour;
