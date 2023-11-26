/* eslint-disable react/prop-types */
const ShoeCard = ({ imgURL, changeBigShoes, bigShoeImage }) => {

  //THis handle click function mainly deals with the change in the shoe image 
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoes(imgURL.bigShoe);
    }
  }

  //if the big shoe image and tumbnail is same then  there need to be border color
  return <div className={` border-2 rounded-xl ${bigShoeImage === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
    onClick={handleClick}>
    <div className=" flex justify-center items-center bg-card bg-center sm:h-40 sm:w-40 max-sm:p-4 rounded-xl ">
      <img src={imgURL.thumbnail} alt="Shoes collection" width={127} height={103} className=" object-contain" />
    </div>
  </div>;
};

export default ShoeCard;
