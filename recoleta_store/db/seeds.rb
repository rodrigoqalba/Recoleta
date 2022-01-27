# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

puts "Seeding Users..."

users = User.create([
    {
        email: "rodrigo@user.com",
        username: "rodrigoalba",
        password: "123",
        admin: true,
        image_url: "https://recoletaimages.s3.amazonaws.com/AdobeStock_265136456.jpeg"
    },
    {
        email: "josh@user.com",
        username: "joshuahawks",
        password: "123",
        admin: false,
        image_url: "https://recoletaimages.s3.amazonaws.com/AdobeStock_304337991.jpeg"
    },
    {
        email: "obie@user.com",
        username: "obiemunoz",
        password: "123",
        admin: false,
        image_url: "https://recoletaimages.s3.amazonaws.com/AdobeStock_289580289.jpeg"
    }
])

puts "✅ Users Seeded..."

puts "Seeding Companies..."
# byebug
companies = Company.create([
    {
        name: "Brazilian Factory",
        country: "Brazil",
        city: "Rio De Janeiro",
        verified: true,
        email: "brazilfactory@bra.com",
        num_of_products: 2
    },
    {
        name: "Mexican Factory",
        country: "Mexico",
        city: "Juarez",
        verified: false,
        email: "mexicofactory@mex.com",
        num_of_products: 1
    },
    {
        name: "Peruvian Factory",
        country: "Peru",
        city: "Lima",
        verified: true,
        email: "perufactory@peru.com",
        num_of_products: 1
    }
])

puts "✅ Companies Seeded..."

puts "Seeding Products..."

products = Product.create([
    {
        name: "T-shirt",
        price: 6,
        colors: "White",
        size: "S, M, L, XL",
        image_url: "/images/White-T-shirt.jpeg",
        dimensions: "1 x 1 x 1 inches",
        weight: "8 Ounces",
        shipping_method: "Air, Sea",
        category: "Clothes",
        company: companies.first
    },
    {
        name: "Leather Dress Shoes",
        price: 20,
        colors: "Black",
        size: "8-13 US, ",
        image_url: "/images/Leather-shoes.jpeg",
        dimensions: "12.64 x 7.6 x 4.61 inches",
        weight: "2.45 Pounds",
        shipping_method: "Air, Sea",
        company: companies.first
    },
    {
        name: "Cat Shirt",
        price: 4,
        colors: "Multicolor",
        size: "Medium cat",
        image_url: "/images/cat-shirt.jpeg",
        dimensions: "9.72 x 6.46 x 0.63 inches",
        weight: "2.08 Ounces",
        shipping_method: "Land, Air, Sea",
        category: "Pets",
        company: companies.second
    },
    {
        name: "Knitted Beanie",
        price: 5,
        colors: "Light Gray",
        size: "One Size Fits All",
        image_url: "/images/winter-hat.jpeg",
        dimensions: "8.1 x 7.6 x 2.4 inches",
        weight: "2 Ounces",
        shipping_method: "Air, Sea",
        category: "Hats",
        company: companies.third
    }
])

puts "✅ Products Seeded..."

puts "Seeding Reviews..."

reviews = Review.create([
    {
        comment: "This is an extremely well made t-shirt.  It is comfortable, it's not baggy, it fits just right, and the price is very reasoable.",
        star_rating: 5,
        user: users.first,
        product: products.first
    },
    {
        comment: "These are some of the most high quality dress shoes I have ever seen.  Brazil has always been known for their mastery in leather shoe making.  The only bad thing is getting it here all the way from Brazil, but it definitely was much faster than bringing them from China.",
        star_rating: 4,
        user: users.second,
        product: products.second
    },
    {
        comment: "The communication above all was phenomenal.  It really helps to have someone in your own time zone, as communicating with Chinese suppliers at 2 a.m. was always a hassle.  Also, the product arrived in a very short amount of time, the location and proximity to the border is key.",
        star_rating: 5,
        user: users.third,
        product: products.third
    },
    {
        comment: "I have been buying from this supplier for a very long time now, and they have never let me down.  Communication has always been very prompt and professional, shipping has always been a breeze, and the product has always been perfect.  I do appreciate that the manufacturer does a quality check of every single product that leaves their factory.",
        star_rating: 5,
        user: users.first,
        product: products.fourth
    }
])

puts "✅ Reviews Seeded..."

puts "Seeding Done ✅"
