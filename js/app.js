﻿/**
 * DUBEM LUXURY BOUTIQUE - SARTORIAL CORE ENGINE
 * Location: No. 19 Nwaturocha Street, Ikenegbu, Owerri, Imo State
 * State Management, Interactive Catalog, Cart Engine, & Atelier Admin Console
 */

// Initial Seed Inventory using verified flagship photography
const DEFAULT_PRODUCTS = [
  // --- FRONT PAGE SPOTLIGHT DROP (₦60,000 IN NAIRA) ---
  {
    id: 'dl-shoe-05',
    title: 'Air Jordan 1 Low SB "Midnight Navy & Metallic Silver"',
    category: 'footwear',
    price: 60000,
    image: 'assets/images/jordan_1_low_midnight_navy.jpg',
    badge: 'Front Page Feature • ₦60,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 6,
    location: '19 Nwaturocha Front Window Showcase',
    description: 'Special edition low-top silhouette featuring rich midnight navy blue suede overlays, clean white leather toe box, reflective metallic silver Swoosh, and infrared Jumpman embroidery. Front page flagship spotlight — ₦60,000 in Nigerian Naira.'
  },
  // --- NEW SARTORIAL ARRIVALS (28 EXCLUSIVE DROPS • ₦25,000 - ₦45,000) ---
  {
    id: 'dl-new-01',
    title: 'Sports 88 Emerald & Sunburst Retro Striped Polo',
    category: 'apparel',
    isNewArrival: true,
    price: 35000,
    image: 'assets/images/drop_new_01.jpg',
    badge: 'New Drop • ₦35,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 6,
    location: '19 Nwaturocha Apparel Salon',
    description: 'Retro football-inspired knit polo in vibrant emerald green and sunburst yellow with dual shoulder race stripes and Sports 88 numeral motif. Tailored for relaxed streetwear drapery.'
  },
  {
    id: 'dl-new-02',
    title: 'Arena O2 Canary & Forest Green Retro Matchday Jersey',
    category: 'apparel',
    isNewArrival: true,
    price: 38000,
    image: 'assets/images/drop_new_02.jpg',
    badge: 'New Drop • ₦38,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 5,
    location: '19 Nwaturocha Apparel Salon',
    description: 'Vintage pitch jersey in canary yellow with forest green athletic collar and double sleeve chevron striping. Pairs effortlessly with wide-leg cargo denim.'
  },
  {
    id: 'dl-new-03',
    title: 'Leandro Belotti Distressed Studded Denim Jorts',
    category: 'apparel',
    isNewArrival: true,
    price: 35000,
    image: 'assets/images/drop_new_03.jpg',
    badge: 'New Drop • ₦35,000',
    sizes: ['30', '32', '34', '36', '38'],
    stock: 7,
    location: '19 Nwaturocha Denim Gallery',
    description: 'Hand-distressed light vintage indigo denim jorts featuring silver metal side-rivet studs, raw frayed cuffs, and oversized knee-length relaxed silhouette.'
  },
  {
    id: 'dl-new-04',
    title: 'Ceferin Galeno Washed Black Baggy Carpenter Jeans',
    category: 'apparel',
    isNewArrival: true,
    price: 42000,
    image: 'assets/images/drop_new_04.jpg',
    badge: 'New Drop • ₦42,000',
    sizes: ['30', '32', '34', '36', '38'],
    stock: 6,
    location: '19 Nwaturocha Denim Gallery',
    description: 'Heavyweight 14oz washed noir denim with double-knee utility paneling, hammer loop, contrast gold back-label branding (LK1003), and stacked puddle hem.'
  },
  {
    id: 'dl-new-05',
    title: 'Giorgio Scalvini Washed Blue Raw-Hem Straight Denim',
    category: 'apparel',
    isNewArrival: true,
    price: 45000,
    image: 'assets/images/drop_new_05.jpg',
    badge: 'New Drop • ₦45,000',
    sizes: ['30', '32', '34', '36', '38'],
    stock: 5,
    location: '19 Nwaturocha Denim Gallery',
    description: 'Italian atelier-inspired washed medium blue denim featuring vintage sun-faded thighs, genuine leather embossed patch (KT 175), and artisanal distressed raw-cut hems.'
  },
  {
    id: 'dl-new-06',
    title: 'Giorgio Scalvini Charcoal Splatter Paint Artisan Jeans',
    category: 'apparel',
    isNewArrival: true,
    price: 45000,
    image: 'assets/images/drop_new_06.jpg',
    badge: 'New Drop • ₦45,000',
    sizes: ['30', '32', '34', '36', '38'],
    stock: 4,
    location: '19 Nwaturocha Denim Gallery',
    description: 'Acid-washed charcoal black denim with hand-flicked white atelier paint splatter accents, tailored wide-leg cut, signature silver metallic waistband patch (KT 167), and raw cuffs.'
  },
  {
    id: 'dl-new-07',
    title: 'Brasil #9 Vintage Long-Sleeve Matchday Polo "R9 Edition"',
    category: 'apparel',
    isNewArrival: true,
    price: 38000,
    image: 'assets/images/drop_new_07.jpg',
    badge: 'New Drop • ₦38,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 6,
    location: '19 Nwaturocha Apparel Salon',
    description: 'Iconic long-sleeve pitch polo in golden canary yellow with forest green fold-over collar, ribbed cuffs, embroidered national crest, and classic #9 striker back print.'
  },
  {
    id: 'dl-new-08',
    title: 'HC 4020 Pleated Seam Washed Charcoal Denim Jorts',
    category: 'apparel',
    isNewArrival: true,
    price: 35000,
    image: 'assets/images/drop_new_08.jpg',
    badge: 'New Drop • ₦35,000',
    sizes: ['30', '32', '34', '36', '38'],
    stock: 8,
    location: '19 Nwaturocha Denim Gallery',
    description: 'Beachfront-tailored washed charcoal denim jorts featuring tailored front pleat pinch seams, relaxed wide-leg profile, and soft garment-washed fade (HC 4020).'
  },
  {
    id: 'dl-new-09',
    title: 'CJ Studio Whiskered Frayed Black Denim Overshirt',
    category: 'apparel',
    isNewArrival: true,
    price: 42000,
    image: 'assets/images/drop_new_09.jpg',
    badge: 'New Drop • ₦42,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 5,
    location: '19 Nwaturocha Apparel Salon',
    description: 'Avant-garde short-sleeve button-down denim jacket in washed noir with horizontal whiskering, distressed chest slashes, contrast white buttons, and olive-camo underlay raw frayed hem.'
  },
  {
    id: 'dl-new-10',
    title: 'YYDS DK223 Multi-Button Fly Acid Charcoal Jorts',
    category: 'apparel',
    isNewArrival: true,
    price: 35000,
    image: 'assets/images/drop_new_10.jpg',
    badge: 'New Drop • ₦35,000',
    sizes: ['30', '32', '34', '36', '38'],
    stock: 7,
    location: '19 Nwaturocha Denim Gallery',
    description: 'Industrial exposed 5-button front fly denim shorts in deep faded charcoal with high-contrast amber topstitching, signature red-backed metallic rivets, and relaxed mid-knee drop (DK223).'
  },
  {
    id: 'dl-new-11',
    title: 'JY 443 Entomological Illustration Acid Wash Denim Jorts',
    category: 'apparel',
    isNewArrival: true,
    price: 35000,
    image: 'assets/images/drop_new_11.jpg',
    badge: 'New Drop • ₦35,000',
    sizes: ['30', '32', '34', '36', '38'],
    stock: 6,
    location: '19 Nwaturocha Denim Gallery',
    description: 'Wide-leg vintage washed ice blue denim jorts detailed with intricate botanical bee, scarab beetle, and poetic script sketches. Finished with studded belt loop accents (JY 443).'
  },
  {
    id: 'dl-new-12',
    title: 'CJ Studio Distressed Washed Indigo Denim Overshirt',
    category: 'apparel',
    isNewArrival: true,
    price: 42000,
    image: 'assets/images/drop_new_12.jpg',
    badge: 'New Drop • ₦42,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 5,
    location: '19 Nwaturocha Apparel Salon',
    description: 'Short-sleeve artisanal denim overshirt in vintage stone-washed blue with chest abrasions, whisker fade, mother-of-pearl style snaps, and layered olive camouflage raw-edge hemline.'
  },
  {
    id: 'dl-new-13',
    title: 'Adidas Retro Three-Stripe Wide-Leg Track Trousers',
    category: 'apparel',
    isNewArrival: true,
    price: 38000,
    image: 'assets/images/drop_new_13.jpg',
    badge: 'New Drop • ₦38,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 9,
    location: '19 Nwaturocha Apparel Salon',
    description: 'Flowing wide-leg track pant in silky matte tricot knit with iconic side 3-stripes, performance bungee drawcord, and embroidered badge. Available in Sage Green, Cream Ivory, and Jet Black.'
  },
  {
    id: 'dl-new-14',
    title: 'GMC Embroidered Palm Tree Resort Cuban Collar Shirt',
    category: 'apparel',
    isNewArrival: true,
    price: 36000,
    image: 'assets/images/drop_new_14.jpg',
    badge: 'New Drop • ₦36,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 8,
    location: '19 Nwaturocha Apparel Salon',
    description: 'Breezy camp-collar resort short-sleeve shirt crafted from premium viscose silk blend featuring vibrant electric-blue embroidered twin palm trees. Available in Noir and Pristine White.'
  },
  {
    id: 'dl-new-15',
    title: 'XTD 1102H Flared Wide-Cut Whisker Denim Jorts',
    category: 'apparel',
    isNewArrival: true,
    price: 35000,
    image: 'assets/images/drop_new_15.jpg',
    badge: 'New Drop • ₦35,000',
    sizes: ['30', '32', '34', '36', '38'],
    stock: 7,
    location: '19 Nwaturocha Denim Gallery',
    description: 'Extreme wide A-line silhouette denim jorts in midnight washed black with prominent radial whiskers on the thighs and clean double-stitched hems (XTD 1102H).'
  },
  {
    id: 'dl-new-16',
    title: 'Orchid Botanical Embroidered Micro-Gingham Shirt',
    category: 'apparel',
    isNewArrival: true,
    price: 38000,
    image: 'assets/images/drop_new_16.jpg',
    badge: 'New Drop • ₦38,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 6,
    location: '19 Nwaturocha Apparel Salon',
    description: 'Refined short-sleeve button-up tailored in Italian micro-gingham check with tactile 3D embroidered vanilla orchid flower chest motif. Offered in Midnight Navy and Toffee Sand.'
  },
  {
    id: 'dl-new-17',
    title: 'Filigree Vine Embroidered Cuban Camp Shirt',
    category: 'apparel',
    isNewArrival: true,
    price: 38000,
    image: 'assets/images/drop_new_17.jpg',
    badge: 'New Drop • ₦38,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 6,
    location: '19 Nwaturocha Apparel Salon',
    description: 'Art nouveau inspired luxury short-sleeve shirt with symmetrical twin trailing floral vine embroidery down both chest panels. Crafted in Noir Black with Gold threading and Ivory with Bronze.'
  },
  {
    id: 'dl-new-18',
    title: '9827# Luxury Minimalist Tipped-Collar Knit Polo',
    category: 'apparel',
    isNewArrival: true,
    price: 35000,
    image: 'assets/images/drop_new_18.jpg',
    badge: 'New Drop • ₦35,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 10,
    location: '19 Nwaturocha Apparel Salon',
    description: 'Ultra-clean modern polo in supple modal cotton blend with contrast ribbed point collar, dual engraved silver buttons, and brushed metal chest plaque. 4 curated palette colorways.'
  },
  {
    id: 'dl-new-19',
    title: 'CO\'SPARD 1913 Tactical Camo-Grid Flap Utility Shirt',
    category: 'apparel',
    isNewArrival: true,
    price: 40000,
    image: 'assets/images/drop_new_19.jpg',
    badge: 'New Drop • ₦40,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 5,
    location: '19 Nwaturocha Apparel Salon',
    description: 'Military-inspired overshirt in olive drab grid-camo jacquard cotton. Features oversized dual flap bellows cargo pockets, reinforced collar, and tonal button closures.'
  },
  {
    id: 'dl-new-20',
    title: 'Zara Man B6805# Studded Suede Harrington Jacket',
    category: 'apparel',
    isNewArrival: true,
    price: 45000,
    image: 'assets/images/drop_new_20.jpg',
    badge: 'New Drop • ₦45,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 8,
    location: '19 Nwaturocha Outerwear Pavilion',
    description: 'Western-luxe Harrington bomber jacket in velvety faux-suede leather with arched chest yoke studded in silver dome rivets, funnel collar, and heavy chrome zip. 4 refined earth tones.'
  },
  {
    id: 'dl-new-21',
    title: 'Louis Vuitton Maison Lambskin Leather Trucker Jacket',
    category: 'apparel',
    isNewArrival: true,
    price: 45000,
    image: 'assets/images/drop_new_21.jpg',
    badge: 'Executive Luxe • ₦45,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 4,
    location: '19 Nwaturocha Outerwear Pavilion',
    description: 'Signature Maison luxury trucker jacket in butter-soft semi-gloss black lambskin leather with snap-flap chest pockets, branded hardware, point collar, and elasticated hemline.'
  },
  {
    id: 'dl-new-22',
    title: 'Ka Meng Studio K.M 88169 Textured Striped Knit Pullover',
    category: 'apparel',
    isNewArrival: true,
    price: 38000,
    image: 'assets/images/drop_new_22.jpg',
    badge: 'New Drop • ₦38,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 6,
    location: '19 Nwaturocha Knitwear Lounge',
    description: 'Relaxed-drape waffle-knit sweater in charcoal and silver breton stripes with split-neck layered collar, drop-shoulder tailoring, and signature atelier label hem tag (K.M 88169).'
  },
  {
    id: 'dl-new-23',
    title: 'L-CFKY Multi-Pocket Heavy Cotton Utility Cargo Shorts',
    category: 'apparel',
    isNewArrival: true,
    price: 35000,
    image: 'assets/images/drop_new_23.jpg',
    badge: 'New Drop • ₦35,000',
    sizes: ['30', '32', '34', '36', '38'],
    stock: 9,
    location: '19 Nwaturocha Denim Gallery',
    description: 'Heavy-duty washed cotton twill cargo shorts with oversized gusseted side utility pockets, tailored belt waistband, and reinforced bartack stitching. In Army Green, Charcoal, Tan, and Slate.'
  },
  {
    id: 'dl-new-24',
    title: 'StÃ¼ssy Contrast Collar Breton Striped Henley',
    category: 'apparel',
    isNewArrival: true,
    price: 38000,
    image: 'assets/images/drop_new_24.jpg',
    badge: 'New Drop • ₦38,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 7,
    location: '19 Nwaturocha Apparel Salon',
    description: 'Long-sleeve skater henley shirt in dense midnight navy and white horizontal stripe cotton with contrast white crew-neck ringer, 3-button placket, and embroidered StÃ¼ssy script logo.'
  },
  {
    id: 'dl-new-25',
    title: 'Nylon Tech Swim & Lounge Shorts "Pastel Canary"',
    category: 'apparel',
    isNewArrival: true,
    price: 25000,
    image: 'assets/images/drop_new_25.jpg',
    badge: 'Resort Essential • ₦25,000',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 12,
    location: '19 Nwaturocha Resort Pavilion',
    description: 'Ultralight quick-dry ripstop nylon shorts in pastel canary yellow with elasticized drawstring waistband, concealed zip pockets, and ergonomic curved hem.'
  },
  {
    id: 'dl-new-26',
    title: 'Nylon Tech Swim & Lounge Shorts "Mint Turquoise"',
    category: 'apparel',
    isNewArrival: true,
    price: 25000,
    image: 'assets/images/drop_new_26.jpg',
    badge: 'Resort Essential • ₦25,000',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 12,
    location: '19 Nwaturocha Resort Pavilion',
    description: 'Breezy poolside nylon performance shorts in vibrant mint turquoise with tonal inner mesh lining, metallic eyelet aglets, and zip security pockets.'
  },
  {
    id: 'dl-new-27',
    title: 'Nylon Tech Swim & Lounge Shorts "Noir Bungee"',
    category: 'apparel',
    isNewArrival: true,
    price: 25000,
    image: 'assets/images/drop_new_27.jpg',
    badge: 'Resort Essential • ₦25,000',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 15,
    location: '19 Nwaturocha Resort Pavilion',
    description: 'Stealth noir technical nylon shorts with dual hem toggle bungee cords for customizable silhouette flair, deep side pockets, and durable water-repellent finish.'
  },
  {
    id: 'dl-new-28',
    title: 'Nylon Tech Swim & Lounge Shorts "Aqua Cyan"',
    category: 'apparel',
    isNewArrival: true,
    price: 25000,
    image: 'assets/images/drop_new_28.jpg',
    badge: 'Resort Essential • ₦25,000',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 12,
    location: '19 Nwaturocha Resort Pavilion',
    description: 'Lagoon cyan tech nylon lounge shorts featuring bungee cinch side cords, quick-drying lightweight fabric, and tailored streetwear rise for resort luxury.'
  },

  // --- FOOTWEAR COLLECTION (₦70,000 ALL IN NAIRA) ---
  {
    id: 'dl-shoe-01',
    title: 'New Balance 1906R "Protection Tech • Obsidian Metallic"',
    category: 'footwear',
    price: 70000,
    image: 'assets/images/nb_1906r_black_metallic.jpg',
    badge: 'Flagship Drop • ₦70,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 5,
    location: '19 Nwaturocha Front Display',
    description: 'Technical runner silhouette featuring layered metallic silver webbing, breathable charcoal mesh, and N-ergy cushioned responsive sole unit. ₦70,000 in Nigerian Naira.'
  },
  {
    id: 'dl-shoe-02',
    title: 'Nike Air Force 1 Low Luxe "Black Leather & Gum Lug"',
    category: 'footwear',
    price: 70000,
    image: 'assets/images/af1_luxe_black_gum.jpg',
    badge: 'Flagship Drop • ₦70,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 6,
    location: '19 Nwaturocha Front Display',
    description: 'Premium heavy-grain tumbled black leather with contrast gold welt stitching, metallic brass eyelets, and rugged gum rubber cleated lug sole. ₦70,000 in Nigerian Naira.'
  },
  {
    id: 'dl-shoe-03',
    title: 'Nike Air Force 1 Low Luxe "Military Olive & White Lug"',
    category: 'footwear',
    price: 70000,
    image: 'assets/images/af1_luxe_olive_lug.jpg',
    badge: 'Flagship Drop • ₦70,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 5,
    location: '19 Nwaturocha Front Display',
    description: 'Military olive drab pebbled leather, dual tonal Swoosh detailing, and serrated arctic white lug outsole for elevated presence. ₦70,000 in Nigerian Naira.'
  },
  {
    id: 'dl-shoe-04',
    title: 'Nike Dunk Low "Navy Stüssy 8-Ball Edition"',
    category: 'footwear',
    price: 70000,
    image: 'assets/images/dunk_low_stussy_navy.jpg',
    badge: 'Flagship Drop • ₦70,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 4,
    location: '19 Nwaturocha Front Display',
    description: 'Navy obsidian and vintage sail cream panels with embroidered 8-ball graphics, textured paisley Swoosh, and signature Dunk skate box packaging. ₦70,000 in Nigerian Naira.'
  },
  {
    id: 'dl-shoe-06',
    title: 'Air Jordan 4 Retro "Black Cat • Noir Special Edition"',
    category: 'footwear',
    price: 70000,
    image: 'assets/images/jordan_4_retro_black_cat.jpg',
    badge: 'Flagship Drop • ₦70,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 5,
    location: '19 Nwaturocha Front Display',
    description: 'Iconic silhouette in monochromatic black tumbled leather and matte nubuck, molded TPU eyelet wings, signature quarter netting, and visible heel Air unit. ₦70,000 in Nigerian Naira.'
  },
  {
    id: 'dl-drop-01',
    title: 'Nike Air Max BW Classic "Stealth Shadow"',
    category: 'footwear',
    price: 70000,
    image: 'assets/images/air_max_bw_charcoal.jpg',
    badge: 'Flagship Drop • ₦70,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 6,
    location: '19 Nwaturocha Front Display',
    description: 'Charcoal grey and matte obsidian black upper with reflective metallic silver piping and responsive Air Max cushioned sole. Delivered in signature Dubem luxury box. ₦70,000 in Nigerian Naira.'
  },
  {
    id: 'dl-drop-02',
    title: 'Air Jordan 1 Low Retro "Burgundy Wine & Sail"',
    category: 'footwear',
    price: 70000,
    image: 'assets/images/jordan_1_burgundy_sail.png',
    badge: 'Flagship Drop • ₦70,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 5,
    location: '19 Nwaturocha Front Display',
    description: 'Special edition vintage luxury court sneaker featuring rich burgundy wine leather, sail ivory panels, and cool stone grey accents. Delivered in signature Dubem luxury box. ₦70,000 in Nigerian Naira.'
  },

  // --- LUXURY BAGS COLLECTION (₦30,000 ALL IN NAIRA) ---
  {
    id: 'dl-bag-01',
    title: 'Artisanal Floral Embroidered Bag "Sage Mint"',
    category: 'bags',
    price: 30000,
    image: 'assets/images/bag_floral_sage.jpg',
    badge: 'Flagship Drop • ₦30,000',
    sizes: ['One Size (Crossbody / Shoulder)'],
    stock: 5,
    location: '19 Nwaturocha Accessories Salon',
    description: 'Structured sage mint green leather shoulder and crossbody bag with relief hand-embroidered sunflowers and daisies, woven geometric jacquard strap, and polished gold-tone hardware. ₦30,000 in Nigerian Naira.'
  },
  {
    id: 'dl-bag-02',
    title: 'Artisanal Floral Embroidered Bag "Ivory Cream"',
    category: 'bags',
    price: 30000,
    image: 'assets/images/bag_floral_ivory.jpg',
    badge: 'Flagship Drop • ₦30,000',
    sizes: ['One Size (Crossbody / Shoulder)'],
    stock: 4,
    location: '19 Nwaturocha Accessories Salon',
    description: 'Pristine ivory cream white leather shoulder and crossbody bag with vibrant three-dimensional floral sunflower embroidery and gold hardware. ₦30,000 in Nigerian Naira.'
  },
  {
    id: 'dl-bag-03',
    title: 'Artisanal Floral Embroidered Bag "Onyx Obsidian"',
    category: 'bags',
    price: 30000,
    image: 'assets/images/bag_floral_black.jpg',
    badge: 'Flagship Drop • ₦30,000',
    sizes: ['One Size (Crossbody / Shoulder)'],
    stock: 5,
    location: '19 Nwaturocha Accessories Salon',
    description: 'Midnight onyx black leather shoulder and crossbody bag with high-contrast stitched daisies, sunflowers, and woven strap. ₦30,000 in Nigerian Naira.'
  },

  // --- HAUTE COUTURE APPAREL, JERSEYS, SETS & DENIM (RANDOMIZED ₦35,000 - ₦45,000 IN NAIRA) ---
  {
    id: 'dl-app-01',
    title: 'Brazil 1998 Retro "Canary Yellow & Emerald #9"',
    category: 'apparel',
    price: 38000,
    image: 'assets/images/jersey_brazil_yellow.jpg',
    badge: 'Couture Drop • ₦38,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 6,
    location: '19 Nwaturocha Streetwear Section',
    description: 'Archival canary yellow football jersey featuring iconic emerald green collar and stripe detailing, flock print #9, and embroidered CBF crest. ₦38,000 in Nigerian Naira.'
  },
  {
    id: 'dl-app-02',
    title: 'REDIEM Geometric "Matte Black Tech Backpack"',
    category: 'bags',
    price: 45000,
    image: 'assets/images/bag_rediem_black_backpack.jpg',
    badge: 'Flagship Tech • ₦45,000',
    sizes: ['One Size (Laptop / Travel)'],
    stock: 4,
    location: '19 Nwaturocha Accessories Salon',
    description: 'Architectural geometric roll-top modular backpack crafted in water-resistant matte black vulcanized polyurethane with padded ergonomic harness and laptop sleeve. ₦45,000 in Nigerian Naira.'
  },
  {
    id: 'dl-app-03',
    title: 'Goyard Monogram "Executive Laptop Briefcase"',
    category: 'bags',
    price: 44000,
    image: 'assets/images/bag_goyard_monogram_briefcase.jpg',
    badge: 'Executive Drop • ₦44,000',
    sizes: ['One Size (15" Laptop / Portfolio)'],
    stock: 5,
    location: '19 Nwaturocha Accessories Salon',
    description: 'Chevron monogram coated canvas with smooth black leather front pocket flap, wrapped top handles, polished nickel hardware, and detachable woven crossbody strap. ₦44,000 in Nigerian Naira.'
  },
  {
    id: 'dl-app-04',
    title: 'Brazil Noir Edition "Obsidian & Emerald #9"',
    category: 'apparel',
    price: 39000,
    image: 'assets/images/jersey_brazil_black.jpg',
    badge: 'Special Edition • ₦39,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 5,
    location: '19 Nwaturocha Streetwear Section',
    description: 'Stealth noir colorway with forest green 3-stripes, monochrome CBF crest, and emerald #9 detailing. Cut in an oversized boxy streetwear drape. ₦39,000 in Nigerian Naira.'
  },
  {
    id: 'dl-app-05',
    title: 'Brazil Classic Away "Arctic White & Emerald #9"',
    category: 'apparel',
    price: 37000,
    image: 'assets/images/jersey_brazil_white.jpg',
    badge: 'Limited Drop • ₦37,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 5,
    location: '19 Nwaturocha Streetwear Section',
    description: 'Crisp optical white pique performance fabric with contrast bottle-green spread collar and shoulder piping, finished with emerald #9 center chest insignia. ₦37,000 in Nigerian Naira.'
  },
  {
    id: 'dl-app-06',
    title: 'Sartorial Boxy Muscle Tee "Onyx Black"',
    category: 'apparel',
    price: 35000,
    image: 'assets/images/tee_sleeveless_black.jpg',
    badge: 'Atelier Essential • ₦35,000',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 8,
    location: '19 Nwaturocha Essentials Rack',
    description: '320 GSM heavyweight combed cotton sleeveless boxy muscle tee with reinforced ribbed crewneck, dropped wide armholes, and seamless clean hem. ₦35,000 in Nigerian Naira.'
  },
  {
    id: 'dl-app-07',
    title: 'Minimalist Dual Box Logo Tees "Sky Blue & Blossom"',
    category: 'apparel',
    price: 36000,
    image: 'assets/images/tee_box_logo_blue_pink.jpg',
    badge: 'Summer Drop • ₦36,000',
    sizes: ['M', 'L', 'XL'],
    stock: 6,
    location: '19 Nwaturocha Streetwear Section',
    description: 'Soft-washed pastel heavyweight jersey cotton tee featuring micro-embossed geometric frame branding across torso and sleeves. ₦36,000 in Nigerian Naira.'
  },
  {
    id: 'dl-app-08',
    title: 'Sartorial Boxy Muscle Tee "Pure White"',
    category: 'apparel',
    price: 35000,
    image: 'assets/images/tee_sleeveless_white.jpg',
    badge: 'Atelier Essential • ₦35,000',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 8,
    location: '19 Nwaturocha Essentials Rack',
    description: '320 GSM heavyweight luxury cotton sleeveless tee in crisp optic white. Architectural shoulder cut creating an effortless silhouette. ₦35,000 in Nigerian Naira.'
  },
  {
    id: 'dl-app-09',
    title: 'Balenciaga Paris "Minimalist Logo Boxy Tee"',
    category: 'apparel',
    price: 42000,
    image: 'assets/images/tee_balenciaga_black.jpg',
    badge: 'Haute Streetwear • ₦42,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 5,
    location: '19 Nwaturocha Streetwear Section',
    description: 'Luxury washed noir vintage cotton t-shirt with signature high-density white Balenciaga chest logo, oversized drop-shoulder cut, and woven hem tag. ₦42,000 in Nigerian Naira.'
  },
  {
    id: 'dl-app-10',
    title: 'Apmanjoy "Script Typography Luxury Tee"',
    category: 'apparel',
    price: 38000,
    image: 'assets/images/tee_apmanjoy_white.jpg',
    badge: 'Designer Drop • ₦38,000',
    sizes: ['M', 'L', 'XL'],
    stock: 6,
    location: '19 Nwaturocha Streetwear Section',
    description: 'Heavyweight organic milk-white cotton t-shirt featuring textured chenille and raised high-density Apmanjoy typography on chest. ₦38,000 in Nigerian Naira.'
  },
  {
    id: 'dl-app-11',
    title: 'Zara Man Textured Linen Set "Lemon Sorbet"',
    category: 'apparel',
    price: 43000,
    image: 'assets/images/coord_zara_linen_yellow.jpg',
    badge: 'Resort 2-Piece • ₦43,000',
    sizes: ['M (38-40)', 'L (42)', 'XL (44)'],
    stock: 4,
    location: '19 Nwaturocha Resort Suite',
    description: 'Pure breathable slub linen 2-piece resort ensemble featuring long-sleeve mandarin collar shirt and matching tailored drawstring bermuda shorts in pastel lemon. ₦43,000 in Nigerian Naira.'
  },
  {
    id: 'dl-app-12',
    title: 'Zara Man Textured Linen Set "Burgundy Wine"',
    category: 'apparel',
    price: 44000,
    image: 'assets/images/coord_zara_linen_burgundy.jpg',
    badge: 'Resort 2-Piece • ₦44,000',
    sizes: ['M (38-40)', 'L (42)', 'XL (44)'],
    stock: 4,
    location: '19 Nwaturocha Resort Suite',
    description: 'Rich burgundy wine textured linen 2-piece set. Long-sleeve grandad collar shirt paired with matching relaxed drawstring shorts. ₦44,000 in Nigerian Naira.'
  },
  {
    id: 'dl-app-13',
    title: 'Purple Brand "Monogram Cross Flared Denim"',
    category: 'apparel',
    price: 42000,
    image: 'assets/images/denim_purple_brand_monogram_flare.jpg',
    badge: 'Luxury Denim • ₦42,000',
    sizes: ['30', '32', '34', '36', '38'],
    stock: 5,
    location: '19 Nwaturocha Denim Vault',
    description: 'Light vintage enzyme wash premium stretch denim featuring tonal Gothic cross monogram embroidery throughout, slight flare leg opening, and raw leather waist patch. ₦42,000 in Nigerian Naira.'
  },
  {
    id: 'dl-app-14',
    title: 'Purple Brand "Paint Splatter Stacked Baggy Denim"',
    category: 'apparel',
    price: 45000,
    image: 'assets/images/denim_purple_brand_paint_stacked.jpg',
    badge: 'Luxury Denim • ₦45,000',
    sizes: ['30', '32', '34', '36', '38'],
    stock: 5,
    location: '19 Nwaturocha Denim Vault',
    description: 'Artisan hand-applied white oil paint splatters, subtle whiskering, distress grinding, and an elongated stacked baggy silhouette that pools over footwear. ₦45,000 in Nigerian Naira.'
  },
  {
    id: 'dl-app-15',
    title: 'Purple Brand "Charcoal Noir Paint Flared Denim"',
    category: 'apparel',
    price: 40000,
    image: 'assets/images/denim_purple_brand_black_paint_flare.jpg',
    badge: 'Luxury Denim • ₦40,000',
    sizes: ['30', '32', '34', '36', '38'],
    stock: 5,
    location: '19 Nwaturocha Denim Vault',
    description: 'Washed black carbon finish denim with subtle white drip splatter effects, vintage honeycombs, and a tailored bootcut flare hem. ₦40,000 in Nigerian Naira.'
  },

  // --- NEW ATELIER CLOTHING DROP (FLAT ₦35,000 EACH IN NAIRA) ---
  {
    id: 'dl-cloth-01',
    title: 'Layered Graphic Long-Sleeve Tee "Deep Plum & Breton"',
    category: 'apparel',
    price: 35000,
    image: 'assets/images/tee_layered_plum_stripes.jpg',
    badge: 'Couture Drop • ₦35,000',
    sizes: ['M', 'L', 'XL'],
    stock: 6,
    location: '19 Nwaturocha Apparel Suite',
    description: 'Oversized plum purple graphic tee with double-layer striped long sleeves and inspirational back calligraphy print. ₦35,000 each in Nigerian Naira.'
  },
  {
    id: 'dl-cloth-02',
    title: "O'Sparo Utility Flap-Pocket Overshirt 'Military Olive'",
    category: 'apparel',
    price: 35000,
    image: 'assets/images/overshirt_osparo_olive_grid.jpg',
    badge: 'Utility Luxury • ₦35,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 5,
    location: '19 Nwaturocha Apparel Suite',
    description: "Architectural micro-check grid jacket-shirt with dual reinforced bellows chest pockets and horn buttons. ₦35,000 each in Nigerian Naira."
  },
  {
    id: 'dl-cloth-03',
    title: "O'Sparo Utility Flap-Pocket Overshirt 'Noir Charcoal'",
    category: 'apparel',
    price: 35000,
    image: 'assets/images/overshirt_osparo_charcoal_grid.jpg',
    badge: 'Utility Luxury • ₦35,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 5,
    location: '19 Nwaturocha Apparel Suite',
    description: "Monochrome dark charcoal micro-grid chore jacket-shirt with double patch pockets and structured collar. ₦35,000 each in Nigerian Naira."
  },
  {
    id: 'dl-cloth-04',
    title: 'Black Bacni "Cyan-Eyed Panther Luxury Tee"',
    category: 'apparel',
    price: 35000,
    image: 'assets/images/tee_black_bacni_panther.jpg',
    badge: 'Graphic Drop • ₦35,000',
    sizes: ['M', 'L', 'XL'],
    stock: 7,
    location: '19 Nwaturocha Apparel Suite',
    description: 'Heavyweight organic white cotton t-shirt with high-definition seated black panther artwork and luminous cyan eyes. ₦35,000 each in Nigerian Naira.'
  },
  {
    id: 'dl-cloth-05',
    title: 'Milano Triangle Plaque Minimalist Zip Coach Jacket',
    category: 'apparel',
    price: 35000,
    image: 'assets/images/jacket_prada_triangle_coach.jpg',
    badge: 'Milano Atelier • ₦35,000',
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 4,
    location: '19 Nwaturocha VIP Salon',
    description: 'Matte black tailored zip-front blouson jacket with enamel metal chest triangle insignia and silver hardware. ₦35,000 each in Nigerian Naira.'
  },
  {
    id: 'dl-cloth-06',
    title: 'Imperial Tasselled Moroccan Kaftan Thobe "Emerald Green"',
    category: 'apparel',
    price: 35000,
    image: 'assets/images/kaftan_moroccan_dark_green.jpg',
    badge: 'Sovereign Kaftan • ₦35,000',
    sizes: ['54 (M)', '56 (L)', '58 (XL)', '60 (XXL)'],
    stock: 5,
    location: '19 Nwaturocha Royal Suite',
    description: 'Luxurious tailored floor-length Moroccan kaftan in rich dark emerald green with braided neck cord, matching tassel, and gold accent plate. ₦35,000 each in Nigerian Naira.'
  },
  {
    id: 'dl-cloth-07',
    title: 'Imperial Tasselled Moroccan Kaftan Thobe "Majestic Purple"',
    category: 'apparel',
    price: 35000,
    image: 'assets/images/kaftan_moroccan_royal_purple.jpg',
    badge: 'Sovereign Kaftan • ₦35,000',
    sizes: ['54 (M)', '56 (L)', '58 (XL)', '60 (XXL)'],
    stock: 5,
    location: '19 Nwaturocha Royal Suite',
    description: 'Regal violet purple thobe kaftan with bespoke braided tassel pendant, clean mandarin collar, and hidden in-seam pockets. ₦35,000 each in Nigerian Naira.'
  },
  {
    id: 'dl-cloth-08',
    title: 'Zara Man Clover Embroidered Resort Shirt "Mint Jade"',
    category: 'apparel',
    price: 35000,
    image: 'assets/images/shirt_zara_clover_mint.jpg',
    badge: 'Resort Essential • ₦35,000',
    sizes: ['M', 'L', 'XL'],
    stock: 6,
    location: '19 Nwaturocha Resort Suite',
    description: 'Silky smooth pastel mint green Cuban collar short-sleeve resort shirt with embroidered emerald four-leaf clover. ₦35,000 each in Nigerian Naira.'
  },
  {
    id: 'dl-cloth-09',
    title: 'Lacoste Paris Classic Crocodile Oxford "Sky Blue"',
    category: 'apparel',
    price: 35000,
    image: 'assets/images/shirt_lacoste_crocodile_sky_blue.jpg',
    badge: 'Flagship Classic • ₦35,000',
    sizes: ['M (39)', 'L (41)', 'XL (43)', 'XXL (45)'],
    stock: 6,
    location: '19 Nwaturocha VIP Salon',
    description: 'Bespoke sky blue oxford cotton short-sleeve button-down shirt with iconic green crocodile embroidery on left chest. ₦35,000 each in Nigerian Naira.'
  },
  {
    id: 'dl-cloth-10',
    title: 'Atelier Ribbed Waffle Henley 2-Piece Lounge Set "Heather Grey"',
    category: 'apparel',
    price: 35000,
    image: 'assets/images/coord_waffle_lounge_set_grey.jpg',
    badge: '2-Piece Set • ₦35,000',
    sizes: ['M', 'L', 'XL'],
    stock: 5,
    location: '19 Nwaturocha Resort Suite',
    description: 'Textured heather grey ribbed waffle short-sleeve henley shirt with layered white collar and matching drawstring shorts. ₦35,000 each in Nigerian Naira.'
  },
  {
    id: 'dl-cloth-11',
    title: 'Atelier Ribbed Waffle Henley 2-Piece Lounge Set "Charcoal Noir"',
    category: 'apparel',
    price: 35000,
    image: 'assets/images/coord_waffle_lounge_set_charcoal.jpg',
    badge: '2-Piece Set • ₦35,000',
    sizes: ['M', 'L', 'XL'],
    stock: 5,
    location: '19 Nwaturocha Resort Suite',
    description: 'Salt-and-pepper charcoal noir waffle-knit henley shirt with white underlay hem and matching elasticated drawstring lounge shorts. ₦35,000 each in Nigerian Naira.'
  },
  {
    id: 'dl-cloth-12',
    title: 'Sartorial Side-Adjuster Flared Tailored Trousers "Noir"',
    category: 'apparel',
    price: 35000,
    image: 'assets/images/trousers_side_adjuster_black_flare.jpg',
    badge: 'Bespoke Tailoring • ₦35,000',
    sizes: ['30', '32', '34', '36', '38'],
    stock: 5,
    location: '19 Nwaturocha Tailoring Suite',
    description: 'Gurkha-style side-adjuster buckle waistband trousers with pressed center pleats and subtle flared bootcut hem in wool-blend black gabardine. ₦35,000 each in Nigerian Naira.'
  },
  {
    id: 'dl-cloth-13',
    title: 'Avant-Garde Split Chess Pawn & King Monograph Shirt',
    category: 'apparel',
    price: 35000,
    image: 'assets/images/shirt_avant_garde_chess_pawn_king.jpg',
    badge: 'Runway Piece • ₦35,000',
    sizes: ['M', 'L', 'XL'],
    stock: 5,
    location: '19 Nwaturocha VIP Salon',
    description: 'Statement drop-shoulder noir shirt with dramatic half-and-half chess pawn & king architectural artwork. ₦35,000 each in Nigerian Naira.'
  },

  // --- LUXURY DESIGNER SLIDES & MULES (FLAT ₦25,000 EACH ALL IN NAIRA) ---
  {
    id: 'dl-slide-01',
    title: 'HUGO Boss Dual-Strap Bold Logo Slides "Noir"',
    category: 'slides',
    price: 25000,
    image: 'assets/images/slide_hugo_boss_double_strap.jpg',
    badge: 'Designer Slide • ₦25,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 6,
    location: '19 Nwaturocha Footwear Salon',
    description: 'Contoured ergonomic black footbed with dual adjustable velcro bridge straps and high-contrast white HUGO side lettering. ₦25,000 in Nigerian Naira.'
  },
  {
    id: 'dl-slide-02',
    title: 'Zara Man Sleek Monochrome Leather Slide "Noir"',
    category: 'slides',
    price: 25000,
    image: 'assets/images/slide_zara_minimal_black_leather.jpg',
    badge: 'Minimalist Leather • ₦25,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 6,
    location: '19 Nwaturocha Footwear Salon',
    description: 'Italian calfskin wide band vamp with cushioned footbed and vulcanized herringbone grip outsole. ₦25,000 in Nigerian Naira.'
  },
  {
    id: 'dl-slide-03',
    title: 'Christian Louboutin Signature Red Sole Bar Slide',
    category: 'slides',
    price: 25000,
    image: 'assets/images/slide_christian_louboutin_red_sole.jpg',
    badge: 'Red Sole Special • ₦25,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 5,
    location: '19 Nwaturocha Footwear Salon',
    description: 'Matte black calfskin H-bar slide with silver metallic bar accent and signature Louboutin scarlet red lacquered sole. ₦25,000 in Nigerian Naira.'
  },
  {
    id: 'dl-slide-04',
    title: 'Burberry London TB Monogram Metal Plaque Slide',
    category: 'slides',
    price: 25000,
    image: 'assets/images/slide_burberry_tb_monogram.jpg',
    badge: 'Monogram Drop • ₦25,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 5,
    location: '19 Nwaturocha Footwear Salon',
    description: 'Smooth black calf leather slide accented with polished brass Thomas Burberry TB monogram hardware. ₦25,000 in Nigerian Naira.'
  },
  {
    id: 'dl-slide-05',
    title: 'The Row Quiet Luxury Wide-Strap Leather Slide',
    category: 'slides',
    price: 25000,
    image: 'assets/images/slide_the_row_minimalist_duo.jpg',
    badge: 'Quiet Luxury • ₦25,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 6,
    location: '19 Nwaturocha Footwear Salon',
    description: 'Ultra-soft nappa leather band on contoured black footbed. Available in Onyx Black and Deep Navy. ₦25,000 in Nigerian Naira.'
  },
  {
    id: 'dl-slide-06',
    title: 'Birkenstock Arizona Dual-Buckle Suede Cork Sandals',
    category: 'slides',
    price: 25000,
    image: 'assets/images/slide_birkenstock_arizona_suede.jpg',
    badge: 'Heritage Comfort • ₦25,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 8,
    location: '19 Nwaturocha Footwear Salon',
    description: 'Anatomical cork-latex footbed with velvety suede double-straps and antique bronze pin buckles. ₦25,000 in Nigerian Naira.'
  },
  {
    id: 'dl-slide-07',
    title: 'Givenchy Paris Signature Block Logo Slide "Noir"',
    category: 'slides',
    price: 25000,
    image: 'assets/images/slide_givenchy_paris_black_logo.jpg',
    badge: 'Designer Slide • ₦25,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 6,
    location: '19 Nwaturocha Footwear Salon',
    description: 'Molded EVA foam pool slide with contrast white Givenchy Paris logo plaque and embossed sole branding. ₦25,000 in Nigerian Naira.'
  },
  {
    id: 'dl-slide-08',
    title: 'Zara Man Serrated Tooth Lug Sole Leather Slide',
    category: 'slides',
    price: 25000,
    image: 'assets/images/slide_zara_lug_sole_leather.jpg',
    badge: 'Lug Sole Edition • ₦25,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 5,
    location: '19 Nwaturocha Footwear Salon',
    description: 'Chunky serrated ripple lug outsole paired with tan leather footbed and matte black leather strap. ₦25,000 in Nigerian Naira.'
  },
  {
    id: 'dl-slide-09',
    title: 'Hermès Paris Crystal-Studded H Cutout Leather Slide',
    category: 'slides',
    price: 25000,
    image: 'assets/images/slide_hermes_h_cutout_crystal.jpg',
    badge: 'Haute Couture • ₦25,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 5,
    location: '19 Nwaturocha Footwear Salon',
    description: 'Iconic H-cutout vamp adorned with micro-crystal tessellation on genuine Italian leather sole. Delivered with signature orange presentation box. ₦25,000 in Nigerian Naira.'
  },
  {
    id: 'dl-slide-10',
    title: 'Zara Man Espresso Brown Minimalist Leather Slide',
    category: 'slides',
    price: 25000,
    image: 'assets/images/slide_zara_espresso_leather.jpg',
    badge: 'Rich Leather • ₦25,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 6,
    location: '19 Nwaturocha Footwear Salon',
    description: 'Rich dark espresso chocolate brown leather band with padded camel footbed and non-slip sole. ₦25,000 in Nigerian Naira.'
  },
  {
    id: 'dl-slide-11',
    title: 'Angelo Ruffo Gold Crest Buckled Leather Mules',
    category: 'slides',
    price: 25000,
    image: 'assets/images/slide_angelo_ruffo_buckle_mules.jpg',
    badge: 'Aristocratic Mules • ₦25,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 6,
    location: '19 Nwaturocha Footwear Salon',
    description: 'Luxury closed-toe clogs/mules featuring gold regal crest buckle across vamp. Available in Alabaster White and Onyx Black. ₦25,000 in Nigerian Naira.'
  },
  {
    id: 'dl-slide-12',
    title: 'Dior Grained Calfskin Crisscross CD Slide "Navy"',
    category: 'slides',
    price: 25000,
    image: 'assets/images/slide_dior_cd_crisscross_navy.jpg',
    badge: 'Haute Luxury • ₦25,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 5,
    location: '19 Nwaturocha Footwear Salon',
    description: 'Rich navy blue pebbled calfskin crisscross wide straps with tonal embossed CD emblem and padded sole. ₦25,000 in Nigerian Naira.'
  },
  {
    id: 'dl-slide-13',
    title: 'Givenchy Paris Logo Pool Slide "Military Olive"',
    category: 'slides',
    price: 25000,
    image: 'assets/images/slide_givenchy_military_olive.jpg',
    badge: 'Designer Slide • ₦25,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 6,
    location: '19 Nwaturocha Footwear Salon',
    description: 'Seamless military olive drab molded slide with white Givenchy Paris logo band and textured grip. ₦25,000 in Nigerian Naira.'
  },
  {
    id: 'dl-slide-14',
    title: 'Will Cozy Ergonomic Dual-Velcro Slide "Heather Grey"',
    category: 'slides',
    price: 25000,
    image: 'assets/images/slide_will_cozy_velcro_grey.jpg',
    badge: 'Recovery Slide • ₦25,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 7,
    location: '19 Nwaturocha Footwear Salon',
    description: 'Ultra-cushioned therapeutic recovery slide featuring dual adjustable heather grey velcro straps and arch support footbed. ₦25,000 in Nigerian Naira.'
  },
  {
    id: 'dl-slide-15',
    title: 'Will Cozy Ergonomic Dual-Velcro Slide "Midnight Black"',
    category: 'slides',
    price: 25000,
    image: 'assets/images/slide_will_cozy_velcro_black.jpg',
    badge: 'Recovery Slide • ₦25,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 7,
    location: '19 Nwaturocha Footwear Salon',
    description: 'Matte black nubuck dual velcro strap comfort recovery slides with shock-absorbing platform sole. ₦25,000 in Nigerian Naira.'
  },
  {
    id: 'dl-slide-16',
    title: 'Off-Grid Striped Platform Foam Clogs',
    category: 'slides',
    price: 25000,
    image: 'assets/images/clog_striped_foam_platform.jpg',
    badge: 'Avant-Garde Clog • ₦25,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 6,
    location: '19 Nwaturocha Footwear Salon',
    description: 'Sculptural chunky foam platform clogs featuring contrast horizontal ribbed racing stripes, pivoting heel strap with security button, and textured footbed. ₦25,000 each in Nigerian Naira.'
  },
  {
    id: 'dl-slide-17',
    title: 'Zara Man Criss-Cross Leather Slide "Noir & Tan"',
    category: 'slides',
    price: 25000,
    image: 'assets/images/slide_zara_crisscross_black_tan.jpg',
    badge: 'Minimalist Leather • ₦25,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 6,
    location: '19 Nwaturocha Footwear Salon',
    description: 'Wide overlapping smooth black leather crossover straps with padded tan calfskin insole and vulcanized rubber sole. ₦25,000 each in Nigerian Naira.'
  },
  {
    id: 'dl-slide-18',
    title: 'Textured 3-Stripe Perforated Foam Clogs "Noir"',
    category: 'slides',
    price: 25000,
    image: 'assets/images/clog_textured_3stripe_perforated.jpg',
    badge: 'Waterproof Clog • ₦25,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 6,
    location: '19 Nwaturocha Footwear Salon',
    description: 'Micro-diamond textured breathable molded EVA clogs with perforated vamp, contrast diagonal 3-stripe racing accents, and adjustable swivel heel strap. ₦25,000 each in Nigerian Naira.'
  },

  // --- EXECUTIVE FOOTWEAR COLLECTION (FLAT ₦80,000 EACH IN NAIRA) ---
  {
    id: 'dl-exec-01',
    title: 'Tom Ford Medallion Brogue Oxford "Noir Box Calfskin"',
    category: 'executive',
    price: 80000,
    image: 'assets/images/oxford_tom_ford_black_brogue.jpg',
    badge: 'Executive Formal • ₦80,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 5,
    location: '19 Nwaturocha Executive Suite',
    description: 'Masterfully crafted wholecut closed-lacing Oxford in mirror-polished noir box calfskin. Features bespoke medallion perforation at the toe, Goodyear welted construction, and the signature orange-embossed Tom Ford seal on the hand-finished leather sole. Flat ₦80,000 each in Nigerian Naira.'
  },
  {
    id: 'dl-exec-02',
    title: 'Tom Ford Burnished Brogue Oxford "Espresso Cognac"',
    category: 'executive',
    price: 80000,
    image: 'assets/images/oxford_tom_ford_espresso_brogue.jpg',
    badge: 'Executive Formal • ₦80,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 4,
    location: '19 Nwaturocha Executive Suite',
    description: 'Bespoke hand-patinated espresso brown calf leather with rich burnished undertones. Hand-punched brogue detailing, chiseled silhouette, Goodyear welted leather sole with Tom Ford emblem, and stacked leather heel. Flat ₦80,000 each in Nigerian Naira.'
  },
  {
    id: 'dl-exec-03',
    title: 'Richwanaz Milano Handcrafted Derby "Black Calfskin & Gold Accent"',
    category: 'executive',
    price: 80000,
    image: 'assets/images/derby_richwanaz_black_calfskin.jpg',
    badge: 'Executive Formal • ₦80,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 5,
    location: '19 Nwaturocha Executive Suite',
    description: 'Ultra-luxe Italian-cut black calfskin derby with open lacing, signature gold-tone architectural emblem on the lateral heel, and storm-welted micro-lug sole. Includes pair of spring-loaded cedar shoe trees and dust sleeves. Flat ₦80,000 each in Nigerian Naira.'
  },
  {
    id: 'dl-exec-04',
    title: 'Gucci Croc-Embossed Lug Penny Loafer "Noir Leather"',
    category: 'executive',
    price: 80000,
    image: 'assets/images/loafer_gucci_croc_lug_sole.jpg',
    badge: 'Executive Formal • ₦80,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 5,
    location: '19 Nwaturocha Executive Suite',
    description: 'Bold executive statement loafer in genuine crocodile-embossed noir black leather with classic penny saddle strap and heavy-duty commando lug sole. Delivered in signature Gucci emerald presentation box. Flat ₦80,000 each in Nigerian Naira.'
  },
  {
    id: 'dl-exec-05',
    title: 'Salvatore Ferragamo Lug Penny Loafer "Burnished Cognac"',
    category: 'executive',
    price: 80000,
    image: 'assets/images/loafer_ferragamo_burnished_brown.jpg',
    badge: 'Executive Formal • ₦80,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 6,
    location: '19 Nwaturocha Executive Suite',
    description: 'Artisanal Italian burnished cognac brown calf leather with hand-stitched apron, penny strap, and polished gold-tone Ferragamo script logo plaque on the cleated lug sole. Pure boardroom sophistication. Flat ₦80,000 each in Nigerian Naira.'
  },
  {
    id: 'dl-exec-06',
    title: 'Gucci Patent Platform Lug Derby "Noir Gloss"',
    category: 'executive',
    price: 80000,
    image: 'assets/images/derby_gucci_patent_lug_sole.jpg',
    badge: 'Executive Formal • ₦80,000',
    sizes: ['40', '41', '42', '43', '44', '45'],
    stock: 4,
    location: '19 Nwaturocha Executive Suite',
    description: 'Avant-garde formal derby in high-gloss mirror-finish black patent leather. Features 4-eyelet waxed lacing, ribbed rubber bumper platform sole with aggressive traction, and Gucci green boutique packaging. Flat ₦80,000 each in Nigerian Naira.'
  }
];

const DEFAULT_ORDERS = [
  {
    id: 'ORD-1104',
    customer: 'Barrister Emeka O.',
    items: 'Tom Ford Black Wholecut Brogue (44) + Salvatore Ferragamo Cognac Loafer (44)',
    total: 160000,
    method: 'Owerri VIP Chauffeur Delivery',
    address: 'Civic Centre Boulevard, New Owerri',
    status: 'Dispatched via Chauffeur',
    date: 'Just now'
  },
  {
    id: 'ORD-1103',
    customer: 'Somtochukwu E.',
    items: 'Off-Grid Striped Platform Clogs (42) + Zara Criss-Cross Slide (42)',
    total: 50000,
    method: 'Owerri Chauffeur Delivery',
    address: 'Works Layout, Owerri',
    status: 'Dispatched via Chauffeur',
    date: 'Just now'
  },
  {
    id: 'ORD-1103',
    customer: 'Somtochukwu E.',
    items: 'Off-Grid Striped Platform Clogs (42) + Zara Criss-Cross Slide (42)',
    total: 50000,
    method: 'Owerri Chauffeur Delivery',
    address: 'Works Layout, Owerri',
    status: 'Dispatched via Chauffeur',
    date: 'Just now'
  },
  {
    id: 'ORD-1102',
    customer: 'Dr. Chinedu E.',
    items: 'Christian Louboutin Red Sole Slide (43) + Hermès H Cutout Crystal Slide (43)',
    total: 50000,
    method: 'Owerri Chauffeur Delivery',
    address: 'Ikenegbu Boulevard, Owerri',
    status: 'Dispatched via Chauffeur',
    date: 'Just now'
  },
  {
    id: 'ORD-1101',
    customer: 'Ngozi B.',
    items: 'Birkenstock Arizona Suede (41) + Zara Minimal Leather Slide (41)',
    total: 50000,
    method: 'In-Store Pickup (19 Nwaturocha)',
    address: 'Boutique Collection',
    status: 'Ready for Collection',
    date: '3 mins ago'
  },
  {
    id: 'ORD-1102',
    customer: 'Dr. Chinedu E.',
    items: 'Christian Louboutin Red Sole Slide (43) + Hermès H Cutout Crystal Slide (43)',
    total: 50000,
    method: 'Owerri Chauffeur Delivery',
    address: 'Ikenegbu Boulevard, Owerri',
    status: 'Dispatched via Chauffeur',
    date: 'Just now'
  },
  {
    id: 'ORD-1101',
    customer: 'Ngozi B.',
    items: 'Birkenstock Arizona Suede (41) + Zara Minimal Leather Slide (41)',
    total: 50000,
    method: 'In-Store Pickup (19 Nwaturocha)',
    address: 'Boutique Collection',
    status: 'Ready for Collection',
    date: '3 mins ago'
  },
  {
    id: 'ORD-1100',
    customer: 'Hon. Justice Kelechi D.',
    items: 'Imperial Moroccan Kaftan "Emerald Green" (58)',
    total: 35000,
    method: 'Owerri Chauffeur Delivery',
    address: 'Civic Center Zone, Owerri',
    status: 'Dispatched via Chauffeur',
    date: 'Just now'
  },
  {
    id: 'ORD-1099',
    customer: 'Chukwudi F.',
    items: 'Milano Triangle Plaque Jacket (L) + Lacoste Oxford (L)',
    total: 70000,
    method: 'In-Store Pickup (19 Nwaturocha)',
    address: 'Boutique Collection',
    status: 'Ready for Collection',
    date: '1 min ago'
  },
  {
    id: 'ORD-1098',
    customer: 'Somtochukwu E.',
    items: 'Brazil 1998 Retro #9 Jersey (L) + Purple Brand Stacked Denim (34)',
    total: 83000,
    method: 'Owerri Chauffeur Delivery',
    address: 'World Bank Estate, Owerri',
    status: 'Dispatched via Chauffeur',
    date: 'Just now'
  },
  {
    id: 'ORD-1097',
    customer: 'Prince Collins A.',
    items: 'Zara Man Linen Set "Lemon Sorbet" (L)',
    total: 43000,
    method: 'In-Store Pickup (19 Nwaturocha)',
    address: 'Boutique Collection',
    status: 'Ready for Collection',
    date: '2 mins ago'
  },
  {
    id: 'ORD-1096',
    customer: 'Barrister Emeka U.',
    items: 'Air Jordan 1 Low SB "Midnight Navy" (43)',
    total: 60000,
    method: 'Owerri Chauffeur Delivery',
    address: 'New Owerri Capital City',
    status: 'Dispatched via Chauffeur',
    date: 'Just now'
  },
  {
    id: 'ORD-1095',
    customer: 'Hon. Chimaobi N.',
    items: 'Air Jordan 4 Retro "Black Cat" (43)',
    total: 70000,
    method: 'Owerri Chauffeur Delivery',
    address: 'Federal Housing Estate, Owerri',
    status: 'Dispatched via Chauffeur',
    date: 'Just now'
  },
  {
    id: 'ORD-1094',
    customer: 'Dr. Obinna M.',
    items: 'New Balance 1906R "Obsidian Metallic" (42)',
    total: 70000,
    method: 'In-Store Pickup (19 Nwaturocha)',
    address: 'Boutique Collection',
    status: 'Ready for Collection',
    date: '10 mins ago'
  },
  {
    id: 'ORD-1093',
    customer: 'Lady Chiamaka V.',
    items: 'Artisanal Floral Bag "Sage Mint"',
    total: 30000,
    method: 'Owerri Chauffeur Delivery',
    address: 'Ikenegbu Extension, Owerri',
    status: 'Dispatched via Chauffeur',
    date: '35 mins ago'
  },
  {
    id: 'ORD-1092',
    customer: 'Chief Kenneth O.',
    items: 'Nike Air Force 1 Luxe "Black & Gum" (44)',
    total: 70000,
    method: 'Owerri Chauffeur Delivery',
    address: 'Works Layout, Owerri',
    status: 'Delivered',
    date: 'Today, 11:30 AM'
  }
];

const DEFAULT_APPOINTMENTS = [
  {
    id: 'APT-401',
    client: 'Barrister Nnamdi',
    email: 'Ezekielabiakam6@gmail.com',
    phone: '+234 803 555 1919',
    type: 'Private Kaftan Fitting',
    time: 'Tomorrow, 2:00 PM',
    refreshment: 'Chilled Champagne',
    stylist: 'Master Dubem',
    status: 'Confirmed'
  },
  {
    id: 'APT-402',
    client: 'Hon. Ifeanyi K.',
    email: 'Ezekielabiakam6@gmail.com',
    phone: '+234 812 888 2020',
    type: 'Wardrobe Refresh Consultation',
    time: 'Friday, 4:30 PM',
    refreshment: 'Italian Espresso',
    stylist: 'Senior Stylist Ada',
    status: 'Confirmed'
  }
];

// App State
class DubemBoutiqueApp {
  constructor() {
    this.products = DEFAULT_PRODUCTS;
    this.saveData('dubem_products', this.products);
    this.orders = this.loadData('dubem_orders', DEFAULT_ORDERS);
    this.appointments = this.loadData('dubem_appointments', DEFAULT_APPOINTMENTS);
    this.cart = this.loadData('dubem_cart', []);
    this.currentCategory = 'all';
    this.isAdminMode = false;
    this.adminTab = 'overview';
    this.selectedPricePreset = 30000;

    this.init();
  }

  loadData(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  saveData(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  formatNaira(amount) {
    return '₦' + Number(amount).toLocaleString('en-NG');
  }

  init() {
    this.initTypography();
    this.renderCatalog();
    this.renderCart();
    this.renderAdminOverview();
    this.renderAdminInventoryTable();
    this.renderAdminOrdersTable();
    this.renderAdminAppointmentsTable();
    this.attachEventListeners();
    this.initFloatingDraggableWhatsApp();
  }

  initFloatingDraggableWhatsApp() {
    const widget = document.getElementById('floatingWhatsAppWidget');
    if (!widget) return;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let initialLeft = 0;
    let initialTop = 0;
    let hasMoved = false;
    const DRAG_THRESHOLD = 6;

    // Restore saved position if available
    try {
      const saved = localStorage.getItem('dubem_wa_widget_pos');
      if (saved) {
        const pos = JSON.parse(saved);
        const maxLeft = window.innerWidth - (widget.offsetWidth || 240) - 8;
        const maxTop = window.innerHeight - (widget.offsetHeight || 60) - 8;
        const clampLeft = Math.max(8, Math.min(pos.left, maxLeft));
        const clampTop = Math.max(8, Math.min(pos.top, maxTop));
        widget.style.left = clampLeft + 'px';
        widget.style.top = clampTop + 'px';
        widget.style.right = 'auto';
        widget.style.bottom = 'auto';
      }
    } catch (err) {}

    const onPointerDown = (e) => {
      if (e.type === 'mousedown' && e.button !== 0) return;

      isDragging = true;
      hasMoved = false;

      const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
      const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;

      startX = clientX;
      startY = clientY;

      const rect = widget.getBoundingClientRect();
      initialLeft = rect.left;
      initialTop = rect.top;

      widget.classList.add('is-dragging');

      if (e.type === 'mousedown') {
        window.addEventListener('mousemove', onPointerMove);
        window.addEventListener('mouseup', onPointerUp);
      } else if (e.type === 'touchstart') {
        window.addEventListener('touchmove', onPointerMove, { passive: false });
        window.addEventListener('touchend', onPointerUp);
      }
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;

      const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
      const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - startX;
      const deltaY = clientY - startY;

      if (Math.abs(deltaX) > DRAG_THRESHOLD || Math.abs(deltaY) > DRAG_THRESHOLD) {
        hasMoved = true;
        if (e.cancelable) e.preventDefault();
      }

      if (hasMoved) {
        const newLeft = initialLeft + deltaX;
        const newTop = initialTop + deltaY;

        const maxLeft = window.innerWidth - widget.offsetWidth - 8;
        const maxTop = window.innerHeight - widget.offsetHeight - 8;
        const clampLeft = Math.max(8, Math.min(newLeft, maxLeft));
        const clampTop = Math.max(8, Math.min(newTop, maxTop));

        widget.style.left = clampLeft + 'px';
        widget.style.top = clampTop + 'px';
        widget.style.right = 'auto';
        widget.style.bottom = 'auto';
      }
    };

    const onPointerUp = (e) => {
      if (!isDragging) return;
      isDragging = false;
      widget.classList.remove('is-dragging');

      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);

      if (hasMoved) {
        try {
          const rect = widget.getBoundingClientRect();
          localStorage.setItem('dubem_wa_widget_pos', JSON.stringify({
            left: Math.round(rect.left),
            top: Math.round(rect.top)
          }));
        } catch (err) {}
      } else {
        // Tap/click detected -> launch WhatsApp
        const message = encodeURIComponent("Hello Dubem Boutique Concierge (+234 916 601 7127), I would like to inquire about your curated luxury collection at No. 19 Nwaturocha Street, Owerri.");
        window.open(`https://wa.me/2349166017127?text=${message}`, '_blank');
      }
    };

    widget.addEventListener('mousedown', onPointerDown);
    widget.addEventListener('touchstart', onPointerDown, { passive: true });
  }

  initTypography() {
    const fontSelector = document.getElementById('fontThemeSelector');
    const savedFont = localStorage.getItem('dubem_font_theme') || 'bodoni';
    document.documentElement.setAttribute('data-font', savedFont);
    if (fontSelector) {
      fontSelector.value = savedFont;
      fontSelector.addEventListener('change', (e) => {
        const val = e.target.value;
        document.documentElement.setAttribute('data-font', val);
        localStorage.setItem('dubem_font_theme', val);
        this.showToast(`Typography set to: ${e.target.options[e.target.selectedIndex].text}`);
      });
    }
  }

  attachEventListeners() {
    // Mode Toggles
    const toggleBtns = document.querySelectorAll('.js-toggle-admin-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleAdminView();
      });
    });

    // Filter Buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentCategory = btn.dataset.category;
        this.renderCatalog();
      });
    });

    // Mobile Simulator Mode Toggle
    const mobileToggleBtn = document.getElementById('mobileViewToggleBtn');
    const mobileBtnText = document.getElementById('mobileViewBtnText');
    if (mobileToggleBtn) {
      mobileToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isMobile = document.body.classList.toggle('is-mobile-frame-mode');
        if (mobileBtnText) {
          mobileBtnText.textContent = isMobile ? '🖥️ Desktop View' : '📱 Mobile View';
        }
        this.showToast(isMobile ? 'Switched to Mobile App Simulator' : 'Switched to Full Desktop View');
      });
    }

    // Mobile Navigation Drawer Controls
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavDrawer = document.getElementById('mobileNavDrawer');
    const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
    const closeMobileNavBtn = document.getElementById('closeMobileNavBtn');
    const mobileNavLinks = document.querySelectorAll('.js-close-mobile-nav');

    const openMobileNav = () => {
      if (mobileNavDrawer) mobileNavDrawer.classList.add('is-open');
      if (mobileNavBackdrop) mobileNavBackdrop.classList.add('is-open');
    };

    const closeMobileNav = () => {
      if (mobileNavDrawer) mobileNavDrawer.classList.remove('is-open');
      if (mobileNavBackdrop) mobileNavBackdrop.classList.remove('is-open');
    };

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileNav);
    if (closeMobileNavBtn) closeMobileNavBtn.addEventListener('click', closeMobileNav);
    if (mobileNavBackdrop) mobileNavBackdrop.addEventListener('click', closeMobileNav);
    mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileNav));

    // Cart Drawer Controls
    const cartToggleBtns = document.querySelectorAll('.js-cart-toggle');
    const cartDrawer = document.getElementById('cartDrawer');
    const drawerBackdrop = document.getElementById('drawerBackdrop');
    const closeDrawerBtn = document.getElementById('closeCartDrawer');

    const openCart = () => {
      cartDrawer.classList.add('active');
      drawerBackdrop.classList.add('active');
    };

    const closeCart = () => {
      cartDrawer.classList.remove('active');
      drawerBackdrop.classList.remove('active');
    };

    cartToggleBtns.forEach(btn => btn.addEventListener('click', openCart));
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeCart);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeCart);

    // Delivery Option Change
    const deliveryRadios = document.querySelectorAll('input[name="deliveryMethod"]');
    deliveryRadios.forEach(radio => {
      radio.addEventListener('change', () => this.renderCart());
    });

    // Checkout Buttons
    const btnDirectCheckout = document.getElementById('btnDirectCheckout');
    const btnWhatsappCheckout = document.getElementById('btnWhatsappCheckout');

    if (btnDirectCheckout) {
      btnDirectCheckout.addEventListener('click', () => this.handleDirectCheckout());
    }

    if (btnWhatsappCheckout) {
      btnWhatsappCheckout.addEventListener('click', () => this.handleWhatsappCheckout());
    }

    // Modal Close
    const closeReceiptBtn = document.getElementById('closeReceiptModal');
    const receiptModal = document.getElementById('receiptModal');
    if (closeReceiptBtn && receiptModal) {
      closeReceiptBtn.addEventListener('click', () => receiptModal.classList.remove('active'));
      receiptModal.addEventListener('click', (e) => {
        if (e.target === receiptModal) receiptModal.classList.remove('active');
      });
    }

    // Editorial Lightbox Modal Close
    const editorialModal = document.getElementById('editorialModal');
    const closeEditorialBtn = document.getElementById('closeEditorialBtn');
    const closeEditorialBackdrop = document.getElementById('closeEditorialBackdrop');
    if (closeEditorialBtn) closeEditorialBtn.addEventListener('click', () => this.closeEditorialModal());
    if (closeEditorialBackdrop) closeEditorialBackdrop.addEventListener('click', () => this.closeEditorialModal());
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && editorialModal && editorialModal.classList.contains('active')) {
        this.closeEditorialModal();
      }
    });

    // Suite 19 VIP Booking Form
    const vipBookingForm = document.getElementById('vipBookingForm');
    if (vipBookingForm) {
      vipBookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleVIPBooking(vipBookingForm);
      });
    }

    // Admin Subnav Tabs
    const adminTabs = document.querySelectorAll('.admin-tab-btn');
    adminTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        adminTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.switchAdminTab(tab.dataset.tab);
      });
    });

    // Admin Price Presets
    const presetBtns = document.querySelectorAll('.preset-price-btn');
    const customPriceInput = document.getElementById('adminProdPrice');
    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        presetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.selectedPricePreset = Number(btn.dataset.price);
        if (customPriceInput) customPriceInput.value = this.selectedPricePreset;
      });
    });

    // Admin Quick Drop Form
    const quickDropForm = document.getElementById('adminQuickDropForm');
    if (quickDropForm) {
      quickDropForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleCreateQuickDrop(quickDropForm);
      });
    }
  }

  toggleAdminView() {
    this.isAdminMode = !this.isAdminMode;
    const clientView = document.getElementById('clientBoutiqueView');
    const adminView = document.getElementById('adminConsoleView');

    if (this.isAdminMode) {
      clientView.style.display = 'none';
      adminView.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.showToast('Entered Dubem Atelier Console (Staff Portal)');
      this.renderAdminOverview();
    } else {
      adminView.classList.remove('active');
      clientView.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.showToast('Returned to Public Flagship Store');
    }
  }

  switchAdminTab(tabName) {
    this.adminTab = tabName;
    const tabPanels = document.querySelectorAll('.admin-tab-panel');
    tabPanels.forEach(p => p.style.display = 'none');

    const activePanel = document.getElementById(`tab-${tabName}`);
    if (activePanel) activePanel.style.display = 'block';
  }

  renderCatalog() {
    const grid = document.getElementById('productCatalogGrid');
    if (!grid) return;

    const filtered = this.currentCategory === 'all'
        ? this.products
        : this.currentCategory === 'new-arrivals'
          ? this.products.filter(p => p.isNewArrival || (p.id && p.id.startsWith('dl-new-')))
          : this.products.filter(p => p.category === this.currentCategory);

    grid.innerHTML = filtered.map(product => {
      return `
        <article class="product-card" data-id="${product.id}">
          <div class="product-image-container js-open-editorial" data-id="${product.id}" title="Tap to inspect piece in detail">
            <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='assets/images/jordan_1_low_midnight_navy.jpg';">
            <span class="product-badge ${product.category === 'streetwear' ? 'emerald' : ''}">${product.badge}</span>
            <span class="product-zoom-hint" title="Inspect High-Res View">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </span>
            <div class="product-actions-overlay">
              <button class="btn-card-acquire js-acquire-btn" data-id="${product.id}">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                Acquire Piece
              </button>
              <button class="btn-card-whatsapp js-whatsapp-item-btn" data-id="${product.id}" title="Reserve via WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.98-.276-.102-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.526-.076-.15-.678-1.633-.929-2.238-.245-.589-.494-.509-.678-.519-.176-.01-.376-.01-.577-.01-.2 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511s1.079 2.912 1.23 3.113c.15.2 2.124 3.243 5.146 4.549.719.311 1.28.497 1.718.636.722.229 1.378.197 1.898.119.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.351z"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.892.524 3.663 1.433 5.178L2 22l5.01-1.317A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2a8.17 8.17 0 0 1-4.17-1.134l-.299-.178-3.097.813.827-3.02-.195-.31A8.178 8.178 0 1 1 12 20.2z"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="product-info">
            <div>
              <div class="product-meta">
                <span class="product-category">${product.category}</span>
                <span class="product-stock-tag">${product.stock} left in stock</span>
              </div>
              <h3 class="product-title">${product.title}</h3>
              <div class="product-sizes-pill-list">
                ${product.sizes.map(s => `<span class="size-pill">${s}</span>`).join('')}
              </div>
            </div>
            <div class="product-price-row">
              <span class="product-price">${this.formatNaira(product.price)}</span>
              <span class="product-loc-indicator">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                19 Nwaturocha
              </span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach click events on buttons
    grid.querySelectorAll('.js-acquire-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        this.addToCart(id);
      });
    });

    grid.querySelectorAll('.js-whatsapp-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        this.orderSingleViaWhatsApp(id);
      });
    });

    // Tap Image to Inspect in Fullscreen Editorial Lightbox
    grid.querySelectorAll('.js-open-editorial').forEach(container => {
      container.addEventListener('click', (e) => {
        if (e.target.closest('.js-acquire-btn') || e.target.closest('.js-whatsapp-item-btn')) {
          return;
        }
        const id = container.dataset.id;
        this.openEditorialModal(id);
      });
    });
  }

  openEditorialModal(productId) {
    const p = this.products.find(item => item.id === productId);
    if (!p) return;

    const modal = document.getElementById('editorialModal');
    if (!modal) return;

    const img = document.getElementById('editorialModalImg');
    const badge = document.getElementById('editorialModalBadge');
    const cat = document.getElementById('editorialModalCat');
    const title = document.getElementById('editorialModalTitle');
    const price = document.getElementById('editorialModalPrice');
    const desc = document.getElementById('editorialModalDesc');
    const sizes = document.getElementById('editorialModalSizes');
    const stock = document.getElementById('editorialModalStock');
    const loc = document.getElementById('editorialModalLoc');
    const waBtn = document.getElementById('editorialModalWhatsApp');
    const acquireBtn = document.getElementById('editorialModalAcquire');

    if (img) {
      img.src = p.image;
      img.alt = p.title;
      img.onerror = () => {
        img.onerror = null;
        img.src = 'assets/images/jordan_1_low_midnight_navy.jpg';
      };
    }
    if (badge) badge.textContent = p.badge || 'Verified Drop';
    if (cat) cat.textContent = p.category ? p.category.toUpperCase() : 'HAUTE COUTURE';
    if (title) title.textContent = p.title;
    if (price) price.textContent = this.formatNaira(p.price);
    if (desc) desc.textContent = p.description || 'Curated luxury garment tailored for relaxed elegance at No. 19 Nwaturocha Street, Ikenegbu, Owerri.';
    if (sizes) sizes.textContent = (p.sizes && p.sizes.length) ? p.sizes.join(', ') : 'One Size / Bespoke';
    if (stock) stock.textContent = `${p.stock} units available in showroom`;
    if (loc) loc.textContent = p.location || '19 Nwaturocha Flagship Salon';

    if (waBtn) {
      const msg = encodeURIComponent(`Hello Dubem Boutique Concierge (+234 916 601 7127), I would like to acquire the ${p.title} (${this.formatNaira(p.price)}) from your No. 19 Nwaturocha Street Salon.`);
      waBtn.href = `https://wa.me/2349166017127?text=${msg}`;
    }

    if (acquireBtn) {
      acquireBtn.onclick = () => {
        this.addToCart(p.id);
        this.closeEditorialModal();
      };
    }

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  closeEditorialModal() {
    const modal = document.getElementById('editorialModal');
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  addToCart(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const existing = this.cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        size: product.sizes[0] || 'Standard',
        quantity: 1
      });
    }

    this.saveData('dubem_cart', this.cart);
    this.renderCart();
    this.showToast(`Acquired: ${product.title}`);

    // Auto-open drawer for quick visual confirmation
    const cartDrawer = document.getElementById('cartDrawer');
    const drawerBackdrop = document.getElementById('drawerBackdrop');
    if (cartDrawer && drawerBackdrop) {
      cartDrawer.classList.add('active');
      drawerBackdrop.classList.add('active');
    }
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveData('dubem_cart', this.cart);
    this.renderCart();
    this.showToast('Item removed from cart');
  }

  updateQuantity(productId, delta) {
    const item = this.cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeFromCart(productId);
    } else {
      this.saveData('dubem_cart', this.cart);
      this.renderCart();
    }
  }

  renderCart() {
    const cartContainer = document.getElementById('cartItemsList');
    const badgeCount = document.getElementById('cartBadgeCount');
    const mobileDockBadge = document.getElementById('mobileDockBadge');
    const subtotalEl = document.getElementById('cartSubtotal');
    const deliveryFeeEl = document.getElementById('cartDeliveryFee');
    const grandTotalEl = document.getElementById('cartGrandTotal');

    const totalCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (badgeCount) badgeCount.textContent = totalCount;
    if (mobileDockBadge) mobileDockBadge.textContent = totalCount;

    if (!cartContainer) return;

    if (this.cart.length === 0) {
      cartContainer.innerHTML = `
        <div class="empty-cart-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <p style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--text-main); margin-bottom: 0.5rem;">Your Curation is Empty</p>
          <p style="font-size: 0.8rem; color: var(--text-muted);">Explore our drops at No. 19 Nwaturocha Street to acquire signature pieces.</p>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = '₦0';
      if (grandTotalEl) grandTotalEl.textContent = '₦0';
      return;
    }

    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Calculate delivery fee
    const selectedDelivery = document.querySelector('input[name="deliveryMethod"]:checked');
    let deliveryFee = 0;
    if (selectedDelivery) {
      if (selectedDelivery.value === 'chauffeur') deliveryFee = 5000;
      if (selectedDelivery.value === 'interstate') deliveryFee = 8500;
      if (selectedDelivery.value === 'pickup') deliveryFee = 0;
    }

    const grandTotal = subtotal + deliveryFee;

    if (subtotalEl) subtotalEl.textContent = this.formatNaira(subtotal);
    if (deliveryFeeEl) deliveryFeeEl.textContent = deliveryFee === 0 ? 'Complimentary' : this.formatNaira(deliveryFee);
    if (grandTotalEl) grandTotalEl.textContent = this.formatNaira(grandTotal);

    cartContainer.innerHTML = this.cart.map(item => `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.title}" class="cart-item-thumb">
        <div class="cart-item-details">
          <div>
            <h4 class="cart-item-name">${item.title}</h4>
            <span class="cart-item-sub">Size: ${item.size} • 19 Nwaturocha</span>
          </div>
          <div class="cart-item-qty-row">
            <div class="qty-stepper">
              <button class="qty-btn js-qty-minus" data-id="${item.id}">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn js-qty-plus" data-id="${item.id}">+</button>
            </div>
            <span class="cart-item-price">${this.formatNaira(item.price * item.quantity)}</span>
          </div>
        </div>
      </div>
    `).join('');

    // Attach qty listener
    cartContainer.querySelectorAll('.js-qty-minus').forEach(b => {
      b.addEventListener('click', () => this.updateQuantity(b.dataset.id, -1));
    });
    cartContainer.querySelectorAll('.js-qty-plus').forEach(b => {
      b.addEventListener('click', () => this.updateQuantity(b.dataset.id, 1));
    });
  }

  handleDirectCheckout() {
    if (this.cart.length === 0) {
      this.showToast('Please add items to your curation first.');
      return;
    }

    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const selectedDelivery = document.querySelector('input[name="deliveryMethod"]:checked')?.value || 'pickup';
    const deliveryFee = selectedDelivery === 'chauffeur' ? 5000 : (selectedDelivery === 'interstate' ? 8500 : 0);
    const grandTotal = subtotal + deliveryFee;

    const orderNumber = 'ORD-' + Math.floor(1000 + Math.random() * 9000);
    const orderItemsSummary = this.cart.map(i => `${i.title} (${i.size}) x${i.quantity}`).join(', ');

    const newOrder = {
      id: orderNumber,
      customer: 'VIP Patron (' + (selectedDelivery === 'pickup' ? 'In-Store Pickup' : 'Delivery Client') + ')',
      items: orderItemsSummary,
      total: grandTotal,
      method: selectedDelivery === 'chauffeur' ? 'Owerri Chauffeur Delivery' : (selectedDelivery === 'interstate' ? 'Interstate Logistics' : 'In-Store Pickup (19 Nwaturocha)'),
      address: selectedDelivery === 'pickup' ? '19 Nwaturocha St, Ikenegbu' : 'Owerri Metro Dispatch',
      status: 'Packaged with Wax Seal',
      date: 'Just now'
    };

    // Save order into database
    this.orders.unshift(newOrder);
    this.saveData('dubem_orders', this.orders);

    // Show Digital Receipt
    this.showReceiptModal(newOrder, this.cart, grandTotal);

    // Clear Cart
    this.cart = [];
    this.saveData('dubem_cart', this.cart);
    this.renderCart();

    // Close drawer
    document.getElementById('cartDrawer')?.classList.remove('active');
    document.getElementById('drawerBackdrop')?.classList.remove('active');

    // Update Admin data
    this.renderAdminOverview();
    this.renderAdminOrdersTable();
    this.showToast(`Order ${orderNumber} secured with Dubem Wax Seal!`);
  }

  handleWhatsappCheckout() {
    if (this.cart.length === 0) {
      this.showToast('Please add items to your curation first.');
      return;
    }

    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemsList = this.cart.map(i => `• ${i.title} (Size: ${i.size}) - ${this.formatNaira(i.price)} x ${i.quantity}`).join('\n');
    
    const message = encodeURIComponent(
      `*DUBEM LUXURY BOUTIQUE CONCIERGE*\n` +
      `*Location: 19 Nwaturocha St, Ikenegbu, Owerri (Direct: +234 916 601 7127)*\n\n` +
      `Greetings. I would like to acquire the following pieces from your collection:\n\n` +
      `${itemsList}\n\n` +
      `*Total Value: ${this.formatNaira(subtotal)}*\n\n` +
      `Please confirm stock availability and white-glove dispatch details.`
    );

    window.open(`https://wa.me/2349166017127?text=${message}`, '_blank');
  }

  orderSingleViaWhatsApp(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const message = encodeURIComponent(
      `*DUBEM LUXURY BOUTIQUE*\n` +
      `*Flagship: 19 Nwaturocha St, Ikenegbu, Owerri (+234 916 601 7127)*\n\n` +
      `Hello Dubem Concierge, I am interested in acquiring:\n` +
      `*Piece:* ${product.title}\n` +
      `*Price:* ${this.formatNaira(product.price)}\n` +
      `*Category:* ${product.category}\n\n` +
      `Kindly confirm if this piece is available for immediate private pickup or chauffeur dispatch.`
    );

    window.open(`https://wa.me/2349166017127?text=${message}`, '_blank');
  }

  showReceiptModal(order, items, grandTotal) {
    const modal = document.getElementById('receiptModal');
    const content = document.getElementById('receiptDynamicContent');
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="receipt-header">
        <div class="receipt-brand-name">DUBEM LUXURY</div>
        <div class="receipt-brand-address">19 Nwaturocha Street, Ikenegbu, Owerri</div>
      </div>
      <div class="receipt-meta-grid">
        <div><strong>Receipt:</strong> ${order.id}</div>
        <div><strong>Date:</strong> ${new Date().toLocaleDateString('en-GB')}</div>
        <div><strong>Fulfillment:</strong> ${order.method}</div>
        <div><strong>Status:</strong> Authenticated</div>
      </div>
      <table class="receipt-items-table">
        <thead>
          <tr>
            <th>Item Description</th>
            <th style="text-align: right;">Amount</th>
          </tr>
        </thead>
        <tbody>
          ${items.map(item => `
            <tr>
              <td>${item.title} <small style="color:var(--text-muted)">(${item.size}) x${item.quantity}</small></td>
              <td style="text-align: right;">${this.formatNaira(item.price * item.quantity)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div class="receipt-total-row">
        <span>Grand Total</span>
        <span>${this.formatNaira(grandTotal)}</span>
      </div>
      <div class="receipt-wax-seal">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        Dubem Sovereign Wax Seal
      </div>
      <div style="font-size:0.75rem; color:var(--text-muted); text-align:center; margin-top:1rem; border-top:1px dashed rgba(255,255,255,0.08); padding-top:0.8rem;">
        Direct Inquiries &amp; Atelier Concierge: <a href="tel:+2349166017127" style="color:var(--gold-light); text-decoration:none;">+234 916 601 7127</a> • <a href="mailto:Ezekielabiakam6@gmail.com" style="color:var(--gold-light); text-decoration:underline;">Ezekielabiakam6@gmail.com</a>
      </div>
    `;

    modal.classList.add('active');
  }

  handleVIPBooking(form) {
    const name = form.vipName.value;
    const email = form.vipEmail ? form.vipEmail.value : 'Ezekielabiakam6@gmail.com';
    const phone = form.vipPhone.value;
    const date = form.vipDate.value;
    const time = form.vipTime.value;
    const type = form.vipType.value;
    const refreshment = form.vipDrink.value;

    const newAppt = {
      id: 'APT-' + Math.floor(100 + Math.random() * 900),
      client: name,
      email: email || 'Ezekielabiakam6@gmail.com',
      phone: phone,
      type: type,
      time: `${date} at ${time}`,
      refreshment: refreshment,
      stylist: 'Master Dubem',
      status: 'Confirmed'
    };

    this.appointments.unshift(newAppt);
    this.saveData('dubem_appointments', this.appointments);
    this.renderAdminAppointmentsTable();
    this.renderAdminOverview();

    form.reset();
    this.showToast(`Private Suite reserved for ${name}. Confirmation dispatched via WhatsApp (+234 916 601 7127) & email.`);
  }

  // ================= ADMIN CONSOLE LOGIC =================

  renderAdminOverview() {
    const totalRev = this.orders.reduce((sum, o) => sum + o.total, 0);
    const activeOrders = this.orders.filter(o => o.status !== 'Delivered').length;
    const totalStock = this.products.reduce((sum, p) => sum + p.stock, 0);

    const revEl = document.getElementById('metricRevenue');
    const ordersEl = document.getElementById('metricActiveOrders');
    const stockEl = document.getElementById('metricStockCount');
    const apptsEl = document.getElementById('metricAppointments');

    if (revEl) revEl.textContent = this.formatNaira(totalRev);
    if (ordersEl) ordersEl.textContent = activeOrders;
    if (stockEl) stockEl.textContent = totalStock + ' pcs';
    if (apptsEl) apptsEl.textContent = this.appointments.length;
  }

  renderAdminInventoryTable() {
    const tbody = document.getElementById('adminInventoryTableBody');
    if (!tbody) return;

    tbody.innerHTML = this.products.map(p => `
      <tr>
        <td style="display:flex; align-items:center; gap:0.8rem;">
          <img src="${p.image}" alt="" style="width:40px; height:45px; object-fit:cover; border-radius:4px;">
          <div>
            <strong>${p.title}</strong><br>
            <small style="color:var(--text-muted)">${p.category.toUpperCase()}</small>
          </div>
        </td>
        <td><strong style="color:var(--gold-light);">${this.formatNaira(p.price)}</strong></td>
        <td>
          <span class="status-pill ${p.stock > 3 ? 'instock' : (p.stock > 0 ? 'lowstock' : 'soldout')}">
            ${p.stock} units
          </span>
        </td>
        <td>${p.location}</td>
        <td>
          <button class="js-adjust-stock-btn" data-id="${p.id}" data-delta="1" style="color:var(--gold-primary); margin-right:6px;">[ +1 ]</button>
          <button class="js-adjust-stock-btn" data-id="${p.id}" data-delta="-1" style="color:var(--text-muted);">[ -1 ]</button>
        </td>
      </tr>
    `).join('');

    tbody.querySelectorAll('.js-adjust-stock-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const delta = Number(btn.dataset.delta);
        const item = this.products.find(p => p.id === id);
        if (item) {
          item.stock = Math.max(0, item.stock + delta);
          this.saveData('dubem_products', this.products);
          this.renderAdminInventoryTable();
          this.renderAdminOverview();
          this.renderCatalog();
        }
      });
    });
  }

  renderAdminOrdersTable() {
    const tbody = document.getElementById('adminOrdersTableBody');
    if (!tbody) return;

    tbody.innerHTML = this.orders.map(o => `
      <tr>
        <td><strong>${o.id}</strong></td>
        <td>${o.customer}</td>
        <td style="max-width:240px; font-size:0.78rem;">${o.items}</td>
        <td><strong style="color:var(--gold-light);">${this.formatNaira(o.total)}</strong></td>
        <td>${o.method}</td>
        <td>
          <span class="status-pill pending">${o.status}</span>
        </td>
        <td>
          <button class="js-advance-order" data-id="${o.id}" style="color:var(--gold-primary); font-size:0.75rem;">Advance Status</button>
        </td>
      </tr>
    `).join('');

    tbody.querySelectorAll('.js-advance-order').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const order = this.orders.find(o => o.id === id);
        if (order) {
          if (order.status === 'Packaged with Wax Seal') order.status = 'Dispatched via Chauffeur';
          else if (order.status === 'Dispatched via Chauffeur') order.status = 'Delivered';
          else order.status = 'Packaged with Wax Seal';

          this.saveData('dubem_orders', this.orders);
          this.renderAdminOrdersTable();
          this.renderAdminOverview();
          this.showToast(`Order ${id} updated to: ${order.status}`);
        }
      });
    });
  }

  renderAdminAppointmentsTable() {
    const tbody = document.getElementById('adminAppointmentsTableBody');
    if (!tbody) return;

    tbody.innerHTML = this.appointments.map(a => `
      <tr>
        <td><strong>${a.id}</strong></td>
        <td>
          <strong>${a.client}</strong><br>
          <small style="color:var(--text-muted)">${a.phone}</small>
        </td>
        <td>${a.type}</td>
        <td>${a.time}</td>
        <td><span style="color:var(--gold-light);">🥂 ${a.refreshment}</span></td>
        <td><span class="status-pill instock">${a.status}</span></td>
      </tr>
    `).join('');
  }

  handleCreateQuickDrop(form) {
    const title = form.prodTitle.value;
    const category = form.prodCategory.value;
    const price = Number(form.prodPrice.value) || this.selectedPricePreset;
    const badge = form.prodBadge.value || 'Curated Drop';
    const sizes = form.prodSizes.value.split(',').map(s => s.trim()).filter(Boolean);
    const stock = Number(form.prodStock.value) || 3;
    const location = form.prodLoc.value || '19 Nwaturocha Display';

    // Pick one of the active images matching category or fallback
    let image = 'assets/images/air_max_bw_charcoal.jpg';
    if (category === 'executive') image = 'assets/images/oxford_tom_ford_black_brogue.jpg';
    if (category === 'slides') image = 'assets/images/slide_louboutin_red_sole.jpg';
    if (category === 'footwear') image = 'assets/images/jordan_1_burgundy_sail.png';
    if (category === 'bags') image = 'assets/images/bag_floral_embroidered.jpg';
    if (category === 'apparel') image = 'assets/images/kaftan_moroccan_emerald.jpg';
    if (category === 'streetwear') image = 'assets/images/dubem_db_logo.jpg';

    const newProd = {
      id: 'dl-' + Math.floor(100 + Math.random() * 900),
      title: title,
      category: category,
      price: price,
      image: image,
      badge: badge,
      sizes: sizes.length ? sizes : ['Standard'],
      stock: stock,
      location: location,
      description: 'Exclusive boutique drop at No. 19 Nwaturocha Street, Ikenegbu, Owerri.'
    };

    this.products.unshift(newProd);
    this.saveData('dubem_products', this.products);

    this.renderAdminInventoryTable();
    this.renderAdminOverview();
    this.renderCatalog();

    form.reset();
    this.showToast(`New Drop Published: ${title} (${this.formatNaira(price)})`);
  }

  showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'luxury-toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--gold-primary)">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 14 14"/>
      </svg>
      <span style="font-size:0.82rem;">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      setTimeout(() => toast.remove(), 350);
    }, 3800);
  }
}

// Instantiate on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.dubemApp = new DubemBoutiqueApp();
});

// Global Lightbox Functions for Flagship Facade
function openStorefrontLightbox() {
  const modal = document.getElementById('storefrontLightbox');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeStorefrontLightbox() {
  const modal = document.getElementById('storefrontLightbox');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeStorefrontLightbox();
  }
});
