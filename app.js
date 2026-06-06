// Konfigurasi Kustom Jaringan Tema Warna & Font Premium Baru Tailwind CSS via JS
tailwind.config = {
  theme: {
    extend: {
      colors: {
        matcha: "#6B8F5E",
        "matcha-dark": "#4A6741",
        "matcha-light": "#A8C49A",
        sage: "#C8D8C2",
        "sage-pale": "#EAF0E7",
        cream: "#FAFAF7",
        "text-dark": "#2C3528",
        "text-mid": "#5A6857",
        "text-light": "#8A9887",
      },
      fontFamily: {
        // Menggunakan font modern Plus Jakarta Sans untuk teks biasa & harga
        sans: ["Plus Jakarta Sans", "sans-serif"],
        // Menggunakan font klasik Cormorant Garamond untuk judul agar terkesan lebih mewah
        serif: ["Cormorant Garamond", "serif"],
      },
    },
  },
};

function matchaStore() {
  return {
    products: [
      // === DRINKS / MINUMAN ===
      { id: 1, name: "Signature Casa di Matcha Latte", sub: "Murni racikan rahasia matcha espresso khas Casa", price: 34000, img: "gambar/signaturemacthalatte.jpg", cat: "minuman", tag: "Favorite" },
      { id: 2, name: "Artisan Matcha Frappé Overload", sub: "Blended matcha premium dengan topping whip cream melimpah", price: 39000, img: "gambar/matchaflappe.jpg", cat: "minuman", tag: "Favorite" },
      { id: 3, name: "Signature Matcha Frappé Intense", sub: "Kocokan matcha premium ekstra pekat dengan whip cream lembut", price: 40000, img: "gambar/signaturematchafrappe.jpg", cat: "minuman", tag: "Favorite" },
      { id: 4, name: "Strawberry with Matcha Cream", sub: "Layer puree stroberi segar, susu lembut, dan foam matcha tebal", price: 38000, img: "gambar/strawberrywithmatchacream.jpg", cat: "minuman", tag: "New" },
      { id: 5, name: "Banana Matcha Latte Cream", sub: "Layer manis buah pisang berpadu foam matcha pekat", price: 35000, img: "gambar/bananamatchalatte.jpg", cat: "minuman", tag: null },
      { id: 6, name: "Matcha Biscuit Biscoff Lotus", sub: "Krim matcha gurih dengan topping biskuit lotus renyah", price: 38000, img: "gambar/macthabiscuitlotus.jpg", cat: "minuman", tag: "New" },
      { id: 7, name: "Mango Matcha Paradise Combo", sub: "Perpaduan jus mangga murni dengan layer teh hijau jepang", price: 37000, img: "gambar/mangomatcha.png", cat: "minuman", tag: "New" },
      { id: 8, name: "Matcha Aren Signature Latte", sub: "Eksotisme manis gula aren berpadu foam premium", price: 32000, img: "gambar/matchaarenlatte.jpg", cat: "minuman", tag: null },
      { id: 9, name: "Matcha Salted Caramel Fusion", sub: "Saus karamel gurih asin dengan kocokan matcha kuat", price: 36000, img: "gambar/macthasaltedcaramel.jpg", cat: "minuman", tag: "Sale", oldPrice: 42000 },
      { id: 10, name: "Matcha Cream Layer with Boba", sub: "Matcha latte pekat dengan topping boba kenyal premium", price: 35000, img: "gambar/matchacreamwithboba.jpg", cat: "minuman", tag: null },
      { id: 11, name: "Iced Matcha Macchiato Foam", sub: "Kombinasi susu dingin dengan double-shot matcha layer", price: 34000, img: "gambar/matchamachiato.jpg", cat: "minuman", tag: null },
      { id: 12, name: "Matcha Fruit Strawberry Latte", sub: "Buah stroberi segar tumbuk di bawah foam matcha tebal", price: 36000, img: "gambar/matchastrawberry.jpg", cat: "minuman", tag: null },
      { id: 13, name: "Matcha Frappé Crunchy Crumble", sub: "Frappé matcha lembut ditaburi remahan cookie renyah", price: 39000, img: "gambar/matchaflappe1.jpg", cat: "minuman", tag: null },
      { id: 14, name: "Premium Creamy Matcha Float", sub: "Minuman matcha dingin disajikan dengan es krim vanila lembut", price: 38000, img: "gambar/Matchafloat.jpg", cat: "minuman", tag: null },

      // === DESSERTS / PASTRIES ===
      { id: 15, name: "Cute Wobbly Cat Matcha Pudding", sub: "Puding bergoyang bentuk kucing imut rasa matcha pekat", price: 28000, img: "gambar/catpuddingmatcha.jpg", cat: "dessert", tag: "Favorite" },
      { id: 16, name: "French Parisian Matcha Macaron", sub: "Kue macaron renyah dengan isian ganache matcha cair", price: 30000, img: "gambar/macaronmatcha.jpg", cat: "dessert", tag: "New" },
      { id: 17, name: "Traditional Soft Matcha Pudding", sub: "Silky pudding matcha lembut disajikan dingin", price: 25000, img: "gambar/puddingmatcha.jpg", cat: "dessert", tag: null },
      { id: 18, name: "Gourmet Matcha Biscuit Slab", sub: "Kue kering renyah penuh aroma mentega dan teh hijau", price: 45000, img: "gambar/biscuitmactha.jpg", cat: "dessert", tag: null },
      { id: 19, name: "Artisan Fluffy Donuts Glaze", sub: "Donat kentang empuk disiram lapisan glaze matcha jepang", price: 24000, img: "gambar/donutsmatcha.jpg", cat: "dessert", tag: null },
      { id: 20, name: "Burnt Basq Matcha Cheesecake", sub: "Kue keju panggang meleleh berpadu rasa umami matcha", price: 48000, img: "gambar/matchacheesecake.jpg", cat: "dessert", tag: "Sale", oldPrice: 55000 },
      { id: 21, name: "Mille Crêpe Layer Matcha Cake", sub: "Puluhan layer dadar tipis berseling krim matcha artisan", price: 46000, img: "gambar/millecrepematcha.jpg", cat: "dessert", tag: "Favorite" },
      { id: 22, name: "Deluxe Assorted Matcha Dessert Box", sub: "Kotak pencuci mulut premium berlapis mousse matcha lembut", price: 52000, img: "gambar/matchadesert.jpg", cat: "dessert", tag: "Sale", oldPrice: 60000 },
    ],
    cart: [],
    activeCategory: "all",
    categoryTitle: "Semua Menu",
    searchQuery: "",
    cartOpen: false,
    toast: { show: false, message: "" },

    initStore() {
      setTimeout(() => {
        lucide.createIcons();
      }, 100);
    },
    setCategory(cat) {
      this.activeCategory = cat;
      const titles = { all: "Semua Menu", minuman: "Minuman Segar", dessert: "Dessert & Pastry Pilihan" };
      this.categoryTitle = titles[cat] || "Menu";
      this.initStore();
    },
    filteredProducts() {
      return this.products.filter((p) => {
        const matchCat = this.activeCategory === "all" || p.cat === this.activeCategory;
        const matchQuery = p.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || p.sub.toLowerCase().includes(this.searchQuery.toLowerCase());
        return matchCat && matchQuery;
      });
    },
    addToCart(product) {
      const item = this.cart.find((c) => c.id === product.id);
      if (item) {
        item.qty++;
      } else {
        this.cart.push({ ...product, qty: 1 });
      }
      this.triggerToast(`${product.name} berhasil dipesan! 🍵`);
      this.initStore();
    },
    updateQty(id, delta) {
      const idx = this.cart.findIndex((c) => c.id === id);
      if (idx !== -1) {
        this.cart[idx].qty += delta;
        if (this.cart[idx].qty <= 0) this.cart.splice(idx, 1);
      }
      this.initStore();
    },
    getCartTotalQty() {
      return this.cart.reduce((acc, curr) => acc + curr.qty, 0);
    },
    getCartSubtotal() {
      return this.cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
    },
    formatRupiah(num) {
      return "Rp" + num.toLocaleString("id-ID");
    },
    triggerToast(msg) {
      this.toast.message = msg;
      this.toast.show = true;
      setTimeout(() => {
        this.toast.show = false;
      }, 2500);
    },
  };
}
