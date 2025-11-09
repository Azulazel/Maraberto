document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');

    if (productGrid) {
        fetch('assets/products.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(products => {
                productGrid.innerHTML = ''; // Limpa os produtos estáticos
                products.forEach(product => {
                    const productItem = document.createElement('div');
                    productItem.classList.add('product-item');

                    productItem.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>${product.price}</p>
                        <button>Comprar</button>
                    `;

                    productGrid.appendChild(productItem);
                });
            })
            .catch(error => {
                console.error('Erro ao carregar os produtos:', error);
                productGrid.innerHTML = '<p>Não foi possível carregar os produtos. Tente novamente mais tarde.</p>';
            });
    }

    const promoBannerBtn = document.getElementById('promo-banner-btn');
    const productsSection = document.getElementById('products-section');

    if (promoBannerBtn && productsSection) {
        promoBannerBtn.addEventListener('click', () => {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});