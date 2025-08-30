// This array combines products from all 5 product pages
const products = [
  //shop
     { id:1,name: "Scientific Calculator", price: 50, image: "https://5.imimg.com/data5/SJ/DR/MY-31666046/scientific-calculator.jpg" },
    { id:2,name: "Stapler", price: 120, image: "https://www.vkf-renzel.com/out/pictures/generated/product/1/1000_1000_75/r1206154-01/stapler-b4-15514-1.jpg",description: "This Stapler is designed to meet the needs of students, engineers, and professionals...", },
    { id:3,name: "Notebook Set", price: 280, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsjMPUPROus-n2rOYYcm50_REpSr2Zb76Og&s",description: "This Notebook Set is designed to meet the needs of students, engineers, and professionals...", },
    { id:4,name: "Pen Pack", price: 80, image: "https://s3-pwa-prod.mumzworld.com/media/cGF0aD0lMkZtZWRpYSUyRmNhdGFsb2clMkZwcm9kdWN0JTJGaiUyRmElMkZqYXMtbXA5MjEtc2t5Ymx1ZS1wYWNrb2Y1LXVtYS1zdHJhaWdodC1tZXRhbC1wZW4tcGFjay1vZi01LXNreS1ibHVlLTE2NTkwMTQ0MTQuanBnJmZpdD11bmRlZmluZWQ/Uma%20-%20Straight%20Metal%20Pen%20Pack%20of%205%20-%20Sky%20Blue.jpeg" },
    { id:5,name: "Clipboard", price: 320, image: "https://play-lh.googleusercontent.com/BggKi4WCYbq-VuWBK4U96scwxa2rNTiAe1amDkYTJcMLaPPJ2PHhJItWwSGwVhbjMw1c",description: "This Clipboard is designed to meet the needs of students, engineers, and professionals...", },
    { id:6,name: "Markers", price: 150, image: "https://m.media-amazon.com/images/I/71cGqmpjcaL.jpg"},
    { id:7,name: "Scissors", price: 210, image: "https://images-cdn.ubuy.ae/645493d310f2262c352bbb13-kids-scissors-ibayam-5-34-kid.jpg"},
    { id:8,name: "Glue Stick", price: 90, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_2id2cm-JYdBW0AFcLVax0M7mJMRog6EpQ&s" },
    { id:9,name: "Highlighter", price: 60, image: "https://cdn.mafrservices.com/sys-master-root/hbe/hdc/14529942749214/957772_main.jpg?im=Resize=480" },
    { id:10,name: "File Folder", price: 180, image: "https://image.made-in-china.com/202f0j00OnyicsDPLfpW/Letter-Size-Assorted-Colors-Transparent-Information-Booklet-A4-Insert-Folder-Office-File-Folders.webp" },
    { id:11,name: "Drawing Book", price: 240, image: "https://www.cotsandcuddles.com/cdn/shop/files/bcbe2c12-607d-4dc9-97ab-3a739d2fa542.jpg?v=1718173848"},
    { id:12,name: "Staple Pins", price: 70, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pT1--oU-cnJWOSlkIVe3H59vgiLmOIU93A&s"},
 
//School
     { id:13,name: "Eraser Pack", price: 25, image: "https://images-cdn.ubuy.ae/65dad49c4bfb56729d0892df-stabilo-legacy-large-white-eraser.jpg" },
  { id:14,name: "Geometry Box", price: 180, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQMZGn4UqaRKE8-NTtdLH_v6Cnad8VsRvAQ&s" },
  {id:15, name: "Pencil Set", price: 60, image: "https://5.imimg.com/data5/SELLER/Default/2023/7/327752678/YZ/DX/JV/460/art-pencil-kit-12-pcs-500x500.jpg" },
  { id:16,name: "Ruler 15cm", price: 20, image: "https://m.media-amazon.com/images/I/51tNTeeGxLL._UF1000,1000_QL80_.jpg" },
  {id:17, name: "Sharpener", price: 18, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0q2pYnVn17saIdo0SMWYS3Sbpru5IDUbhVg&s" },
  { id:18,name: "Water Bottle", price: 220, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRMNb7PkfVospoebuupTU_MfOpsB9XtNP2ZQ&s" },
  { id:19,name: "School Bag", price: 450, image: "https://cdn.media.amplience.net/i/lmg/165640050_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-m-prt-pdp-2x$" },
  { id:20,name: "Lunch Box", price: 190, image: "https://www.jiomart.com/images/product/original/rvx5fsutsp/kirmit-lunch-box-for-kids-lunch-box-for-kids-3-compartment-insulated-lunch-box-stainless-steel-tiffin-box-for-boys-girls-school-office-men-for-tiffin-box-for-kids-multicolor-product-images-orvx5fsutsp-p602334475-0-202306111305.jpg?im=Resize=(420,420)" },
  { id:21,name: "Compass & Divider Set", price: 135, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76mGLEW7v6LQj2qPkT9BKdMItv91UG4wxsA&s" },
  { id:22,name: "Glue Stick", price: 70, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_EDTZb8kR6rqvtisU_ZgHMMH4Mv11mseJKg&s" },
  { id:23,name: "Crayons Pack", price: 99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQ6v0W5OfNue_pAo1P3J-IppGzlm2pWSQbQ&s" },
  { id:24,name: "Color Pencils", price: 160, image: "https://images.squarespace-cdn.com/content/v1/5511fc7ce4b0a3782aa9418b/1588712241411-RAEB4WBCVV3NTS15FTDR/colored-pencils-guide-for-beginners-and-artists.jpg" },

//Pens
    { id:25,name: "Ball Pen", price: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpJjEs3RLAICHfi3Vau-r7jCs7baSinU-dQ&s" },
    { id:26,name: "Gel Pen", price: 30, image: "https://i5.walmartimages.com/seo/Pen-Gear-Retractable-Gel-Ink-Pens-Assorted-Colors-0-7mm-12-Count_b5eb4524-6ddb-4a6e-9684-2adc092c4bcd.cae45f5f5cced2dd593aa29fd73d68ea.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" },
    { id:27,name: "Fountain Pen", price: 200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-yk2iZUzVMh8EztP7_GmtPUZG7WGphYQ3A&s" },
    { id:28,name: "Highlighter", price: 60, image: "https://cdn.mafrservices.com/sys-master-root/hbe/hdc/14529942749214/957772_main.jpg?im=Resize=480" },
    { id:29,name: "Marker Set", price: 180, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTtQMFw1acCZrvU5wkX_ac4_Rg_d8Ez2x35Q&s" },
    { id:30,name: "Sketch Pen", price: 110, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8w58xlFHhEEsnPZ1wYwcJd2vLJ3faQ4jEqg&s" },
    { id:31,name: "Premium Pen", price: 450, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpTGkrGFZVRvUZCznB9RrcVVS7jIkvjdueFg&s" },
    { id:32,name: "Refill Pack", price: 70, image: "https://www.jiomart.com/images/product/original/rvcdw1ggun/linc-glycer-0-6mm-ball-pen-refills-pack-of-50-blue-ink-product-images-orvcdw1ggun-p606654473-1-202312111156.jpg?im=Resize=(420,420)" },
    {id:33, name: "Brush Pen", price: 140, image: "https://images-cdn.ubuy.ae/633abf301434c87f8e5d8e65-gc-72-colors-dual-tip-brush-pens.jpg" },
    { id:34,name: "Signature Pen", price: 299, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsiIlkq0dR3KDkmZturmmw4aww12ql5U5Tnw&s" },
    { id:35,name: "Calligraphy Set", price: 350, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROF8e0mqkz_biNGeGT_kcfPgrp63wu7rj3Kg&s" },
    { id:36,name: "Pen Case", price: 95, image: "https://m.media-amazon.com/images/I/81YpyjEJcoL.jpg" },


//Papers
   { id:37,name: "Spiral Notebook", price: 85, image: "https://m.media-amazon.com/images/I/71vrP7GOBLL.jpg" },
  { id:38,name: "Hardcover Diary", price: 150, image: "hhttps://assets-production.mochi.media/products/120791/photos/square_thumbnail_226745-daily-to-do-hardcover-journal-999061.jpg" },
  { id:39,name: "Drawing Book", price: 120, image: "https://m.media-amazon.com/images/I/91C4e3J8f1L._UF350,350_QL80_.jpg" },
  { id:40,name: "A4 Ruled Sheets", price: 70, image: "https://m.media-amazon.com/images/I/71UkhfxPilL._UF350,350_QL50_.jpg" },
  { id:41,name: "Pocket Notebook", price: 45, image: "https://m.media-amazon.com/images/I/71YdcI2KmHL.jpg" },
  { id:42,name: "Sticky Notes Pack", price: 90, image: "https://m.media-amazon.com/images/I/71MVOGqUSoL.jpg" },
  { id:43,name: "Project Book", price: 110, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNypGtJTM7A4fHl6KuQ8oTBgD04KIuT98whQ&s" },
  { id:44,name: "Sketch Pad", price: 180, image: "https://images.thimbletoys.com/images/items/1630227a.jpg" },
  { id:45,name: "Note Pad", price: 60, image: "https://media.istockphoto.com/id/1449128535/vector/a-notebook-with-a-horizontal-spring-coil-lies-on-top-of-another-notebook-notepad-with-a.jpg?s=612x612&w=0&k=20&c=Dwi3ueiteZZv7F7qdh9fZirZId8Kq-6HHyvtkRCv7GU=" },
  { id:46,name: "Blank Sheets Pack", price: 140, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHtTq4uhH34JNyLC1h9EohDQRjntp1wpItnA&s" },
  { id:47,name: "Graph Paper Notebook", price: 130, image: "https://m.media-amazon.com/images/I/71NuA+0mrkL.jpg" },
  { id:48,name: "Perforated Sheets", price: 100, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpXGrA2p9fveHMlfMMwPrNwgv809dZYFRIpQ&s" },


//Files
  { id:49,name: "A4 File Folder", price: 90, image: "https://image.made-in-china.com/202f0j00OnyicsDPLfpW/Letter-Size-Assorted-Colors-Transparent-Information-Booklet-A4-Insert-Folder-Office-File-Folders.webp" },
  { id:50,name: "Document File", price: 120, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5c8dcfYs016kmPTKg6vuUmqOGWLAw01pTYA&s" },
  { id:51,name: "Plastic Expanding Folder", price: 210, image: "https://5.imimg.com/data5/SELLER/Default/2022/11/RY/AW/ZT/163346239/rangteq-plastics-offers-plastic-file-13-folder-500x500.jpg" },
  { id:52,name: "Ring Binder", price: 160, image: "https://m.media-amazon.com/images/I/615NuEllDfL._UF1000,1000_QL80_.jpg" },
  { id:53,name: "Report File", price: 60, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRns2DoeM6s8fbtIi5qBMSVb8DhnB1WjwA1lg&s" },
  { id:54,name: "Cardboard File", price: 55, image: "https://m.media-amazon.com/images/I/71cjX-9PlAL.jpg" },
  { id:55,name: "Clip File", price: 130, image: "https://image.made-in-china.com/2f0j00TOoaDBSyrAzh/Factory-Supply-PVC-Paper-Lever-Arch-Clip-File-Folder-2-Ring-Binders.jpg" },
  { id:56,name: "Zipper File Pouch", price: 110, image: "https://m.media-amazon.com/images/I/91I1nlP0IqS.jpg" },
  { id:57,name: "Paper Folder Set", price: 175, image: "https://www.mumzworld.com/media/catalog/product/cache/8bf0fdee44d330ce9e3c910273b66bb2/e/s/ess-sn006-essen-plastic-file-folders-set-of-5-1618519718.jpg" },
  { id:58,name: "Exam Pad File", price: 95, image: "https://5.imimg.com/data5/SELLER/Default/2024/2/390947622/JP/FB/KP/95864112/kids-plastic-truck-toy-500x500.jpg" },
  { id:59,name: "Hard Cover Folder", price: 199, image: "https://image.made-in-china.com/202f0j00RbfkgsTobJcq/Custom-Design-Printed-Hardcover-A4-Leather-Portfolio-Paper-File-Folder-Paper-Folder.webp" },
  { id:60,name: "Document Box File", price: 300, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3BEmghbHqaNLZ6I2IAxP-8PH8K0fVnARDtA&s" }

  // Add products from other 4 product card pages too
];
