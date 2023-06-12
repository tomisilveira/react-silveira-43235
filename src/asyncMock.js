const products = [
    {
      id: 1,
      nombre: "Detergente para ropa",
      precio: 10.99,
      categoria: "Lavandería",
      img: "../img/detergente.jpg",
      stock: 0,
      descripcion: "Detergente líquido para lavado de ropa. Elimina manchas y deja un agradable aroma."
    },
    {
      id: 2,
      nombre: "Limpiador multiusos",
      precio: 5.99,
      categoria: "Superficies",
      img: "../img/limpiador.jpg",
      stock: 30,
      descripcion: "Limpiador en aerosol para uso en diferentes superficies. Remueve suciedad y grasa."
    },
    {
      id: 3,
      nombre: "Jabón líquido para manos",
      precio: 3.49,
      categoria: "Higiene personal",
      img: "../img/jabon.jpg",
      stock: 20,
      descripcion: "Jabón líquido suave para lavado de manos. Proporciona limpieza y frescura."
    },
    // Agrega más productos aquí
  ]

  export const getProducts =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },1000)
    })
  }

  export const getProductById=(productId)=>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(products.find(prod=>prod.id == productId))
      })
    },1000)
  }

  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter((prod) => prod.categoria === category);
        resolve(filteredProducts);
      }, 1000);
    });
  };