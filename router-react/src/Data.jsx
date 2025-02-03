const Products = [
    {
      Name: "U AIRism Cotton Oversized",
      Price: 590,
      Description: "The double-faced structure of the fabric, drop shoulders, and wide fit make for an elegant silhouette.",
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/item/goods_09_455359_3x4.jpg?width=423",
      tag : "men"
    },
    {
      Name: "Oversized Striped Crew Neck Half Sleeve T-Shirt",
      Price: 390,
      Description: "Half-sleeve design in an oversized cut for a relaxed feel.",
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/465492/sub/goods_465492_sub14_3x4.jpg?width=423",
      tag : "men"
    },
    {
      Name: "DRY-EX Crew Neck T-Shirt",
      Price: 390,
      Description: "'DRY-EX' fabric quickly absorbs and wicks away moisture to keep your skin feeling fresh.",
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/471585/sub/goods_471585_sub14_3x4.jpg?width=423",
      tag : "men"
    },
    {
      Name: "Bicolor T-Shirt | Oversized, Raglan Sleeve",
      Price: 590,
      Description: "100% Cotton Fit: Oversized",
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/475366/sub/goods_475366_sub14_3x4.jpg?width=423",
      tag : "men"
    },
    {
      Name: "Sweat Pullover Hoodie",
      Price: 790,
      Description: "Special looped lining prevents pilling and sagging.",
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/444967/sub/goods_444967_sub14_3x4.jpg?width=423",
      tag : "men"
    },
    {
      Name: "Sweat Oversized Pullover Hoodie",
      Price: 1290,
      Description: "Relaxed, oversized silhouette.",
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/471808/sub/goods_471808_sub14_3x4.jpg?width=423",
      tag : "men"
    },
    {
      Name: "American Sleeve Bra Sleeveless Top",
      Price: 590,
      Description: "In response to customer feedback, we’ve adjusted the armhole lines for a more discreet look.",
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464425/sub/goods_464425_sub14_3x4.jpg?width=423",
      tag : "women"
    },
    {
      Name: "Halter Neck Bra Sleeveless Top",
      Price: 590,
      Description: "Perfect for styling alone or as a layering piece under a jacket or sheer top",
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/477038/sub/goods_477038_sub14_3x4.jpg?width=423",
      tag : "women"
    },
    {
      Name: "Ribbed Square Neck Cropped Bra T-shirt",
      Price: 590,
      Description: "This all-in-one bra top means you don’t need to worry about your bra straps showing",
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/476370/sub/goods_476370_sub14_3x4.jpg?width=423",
      tag : "women"
    },
    {
      Name: "AIRism Bra Camisole",
      Price: 590,
      Description: "Printed quality label so the fabric lies smooth against the skin.",
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/465707/sub/goods_465707_sub14_3x4.jpg?width=423",
      tag : "women"
    },
    {
      Name: "SpongeBob SquarePants Cactus",
      Price: 1290,
      Description: "Cactus Plant Flea Market brings their unique designs to the world of SpongeBob and his famous friends. We know he is ready to celebrate 25 years, are you?",
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/477906/sub/goods_477906_sub14_3x4.jpg?width=423",
      tag : "men"
    },
    {
      Name: "PEANUTS Sweat Long Sleeve Shirt",
      Price: 1200,
      Description: "This collection commemorates the 75th anniversary of “Peanuts,” which continues to be loved around the world. The design and colors are inspired by vintage book covers from the '50s to the '80s",
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/477858/sub/goods_477858_sub14_3x4.jpg?width=423",
      tag : "men"
    },
    {
      Name: "KAWS + Warhol Sweat Pants",
      Price: 1300,
      Description: "A unique collaboration has come to life between Andy Warhol, a seminal figure in 20th-century art, and KAWS, a leading artist in contemporary art. This exclusive collection, available only at UNIQLO, celebrates the first ever KAWS + Warhol exhibition at The Andy Warhol Museum in Pittsburgh in 2024.",
      image: "https://image.uniqlo.com/UQ/ST3/th/imagesgoods/476120/item/thgoods_09_476120_3x4.jpg?width=423",
      tag : "men"
    },
    {
      Name: "Ribbed Boat Neck T-Shirt | Half Sleeve, Striped",
      Price: 490,
      Description: "Nicely thick fabric ensures a sleek, fitted look without being too figure-hugging.",
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/475842/sub/goods_475842_sub14_3x4.jpg?width=423",
      tag : "women"
    },
    {
      Name: "Mini T-Shirt",
      Price: 390,
      Description: "The fitted silhouette and smart details make it perfect for casual, dressy, or sporty outfits",
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/465760/sub/goods_465760_sub14_3x4.jpg?width=423",
      tag : "women"
    },
    {
      Name: "Cotton Blend Pointelle Sweater | Short Sleeve, Striped",
      Price: 790,
      Description: "Striped pattern in textured knitted fabric",
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/475227/sub/goods_475227_sub14_3x4.jpg?width=423",
      tag : "women"
    },
    {
      Name: "KIDS AIRism Cotton Graphic T-Shirt",
      Price: 390,
      Description: "Relaxed silhouette is perfect for unisex wear",
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/474603/sub/goods_474603_sub14_3x4.jpg?width=423",
      tag : "kids"
    },
    {
      Name: "KIDS AIRism Cotton Crew Neck T-Shirt",
      Price: 490,
      Description: "A versatile wardrobe essential",
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/474833/sub/goods_474833_sub14_3x4.jpg?width=423",
      tag : "kids"
    },
    {
      Name: "KIDS Dry Pique Polo Shirt",
      Price: 490,
      Description: "Great for casual and sporty outfits, and suitable for a wide range of occasions.",
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/474644/sub/goods_474644_sub14_3x4.jpg?width=423",
      tag : "kids"
    },
    {
      Name: "KIDS Dry Sweat Full-Zip Jacket",
      Price: 790,
      Description: "K’s Dry Sweat Full-zip Jacket (474835) is a jacket design. Only product tag name is incorrect due to the production error as written. Sorry for the inconvenience.",
      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/474835/sub/goods_474835_sub14_3x4.jpg?width=423",
      tag : "kids"
    }
  ];
  
  export default Products;