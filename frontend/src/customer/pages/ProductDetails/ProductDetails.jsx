import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { purple } from "@mui/material/colors";
import { Button, Divider } from "@mui/material";
import {
  Add,
  AddShoppingCart,
  FavoriteBorder,
  LocalShipping,
  Remove,
  Shield,
  Wallet,
  WorkspacePremium,
} from "@mui/icons-material";
import SimilarProduct from "./SimilarProduct";
import ReviewCard from "../Review/ReviewCard";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// ProductDetails Component
const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]); // Add a state to store cart items
  const navigate = useNavigate(); // Initialize useNavigate

  // Product details
  const product = {
    id: 1,
    name: "Men Black Shirt",
    price: 400,
    originalPrice: 999,
  };

  // Add product to cart and navigate to cart page
  const handleAddToCart = () => {
    const productToAdd = { ...product, quantity };
    setCart([...cart, productToAdd]); // Add to cart state

    // Navigate to cart page after adding to the cart
    navigate('/cart');
  };

  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {[1, 1, 1, 1].map((item) => (
              <img
                className="lg:w-full cursor-pointer w-[50px] rounded-md"
                src="https://images.unsplash.com/photo-1588449668365-d15e397f6787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxndWl0YXJ8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md"
              src="https://images.unsplash.com/photo-1588449668365-d15e397f6787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxndWl0YXJ8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
        </section>

        <section className="">
          <h1 className="font-bold text-lg text-primary-color">RentKaro</h1>
          <p className="text-gray-500 font-semibold">{product.name}</p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>4</span>
              <StarIcon sx={{ color: purple[700], fontSize: "17px" }} />
            </div>

            <Divider orientation="vertical" flexItem />
            <span>234 Ratings</span>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">₹{product.price}</span>
              <span className="line-through text-gray-400">₹{product.originalPrice}</span>
              <span className=" text-primary-color font-semibold">60%</span>
            </div>
            <p className="text-sm">
              Inclusive of all Taxes. Free Shipping above ₹1500{" "}
            </p>
          </div>

          <div className="mt-7 space-y-3">
            <div className="flex items-center gap-4">
              <Shield sx={{ color: purple[600] }} />
              <p>Authentic and Quality Assured</p>
            </div>
            <div className="flex items-center gap-4">
              <WorkspacePremium sx={{ color: purple[600] }} />
              <p>100% Working</p>
            </div>
            <div className="flex items-center gap-4">
              <LocalShipping sx={{ color: purple[600] }} />
              <p>Free Shipping And Returns</p>
            </div>
            <div className="flex items-center gap-4">
              <Wallet sx={{ color: purple[600] }} />
              <p>Pay on Delivery (dependent on seller)</p>
            </div>
          </div>

          <div className="mt-7 space-y-2">
            <h1>No. of days you want to rent this product</h1>
            <div className="flex items-center gap-2 justify-between w-[140px]">
              <Button disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)}>
                <Remove />
              </Button>
              <span>{quantity}</span>
              <Button onClick={() => setQuantity(quantity + 1)}>
                <Add />
              </Button>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart />}
              sx={{ py: "1rem" }}
              onClick={handleAddToCart} // Trigger the add to cart function and navigate to /cart
            >
              Rent The Product
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FavoriteBorder />}
              sx={{ py: "1rem" }}
            >
              Wishlist
            </Button>
          </div>

          <div>
            <p className="mt-5">
              The sun dipped below the horizon, casting a warm golden glow across the ocean. Waves gently lapped against the shore, while seagulls soared through the fading sky, creating a peaceful atmosphere.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            <ReviewCard />
            <Divider />
          </div>
        </section>
      </div>

      <div className="mt-20">
        <h1 className="text-lg font-bold">Similar Products</h1>
        <div className="pt-5">
          <SimilarProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
