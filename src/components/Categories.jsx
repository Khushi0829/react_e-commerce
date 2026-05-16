import React from 'react'
import './Categories.css';
import './DealsSection.css';


const shoeCategories = [
    {
        id: 1,
        name: 'Chunky Sneakers',
        image: 'https://i1-c.pinimg.com/1200x/e7/dc/49/e7dc4987f1d92ff4345f023f98821364.jpg',
        oldPrice: '4599',
        newPrice: '1499',
        rating: 4.8
    },
    {
        id: 2,
        name: 'Bosco Leather',
        image: 'https://www.dmodot.com/cdn/shop/files/IMG_5784.jpg?v=1722330420',
        oldPrice: '6599',
        newPrice: '5499',
        rating: 4.9
    },
    {
        id: 3,
        name: 'Manhattan ',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdsQyxd53pmMg8CQ1bMxR37mPmmNzDaH8Fw&s',
        oldPrice: '4599',
        newPrice: '1499',
        rating: 4
    },
    {
        id: 4,
        name: 'Asian Mexico-11 ',
        image: 'https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/29859280/2024/6/1/4e939778-9be4-4ca7-bbef-fd922b25579f1717216485904ASIANMenSneakers1.jpg',
        oldPrice: '4599',
        newPrice: '1499',
        rating: 4.8
    },
    {
        id: 5,
        name: 'Colorblocked  Sneaker Shoes',
        image: 'https://fausto.in/cdn/shop/files/FSTKI-698WHITE_MoodShot_1_400x.jpg?v=1716306331',
        oldPrice: '1499',
        newPrice: '999',
        rating: 4
    },
    {
        id: 6,
        name: 'Nike Air Force 1 07',
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-Wr0Q1t.png',
        oldPrice: '8195',
        newPrice: '7495',
        rating: 4.7
    },
    {
        id: 7,
        name: 'Adidas Originals Superstar',
        image: 'https://i1-c.pinimg.com/1200x/c1/2e/dc/c12edcccb809cdd9436a6a4b2c539856.jpg',
        oldPrice: '7999',
        newPrice: '6999',
        rating: 4.6
    },
    {
        id: 8,
        name: 'Puma RS-X Efekt',
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/390776/01/sv01/fnd/IND/fmt/png/RS-X-Efekt-Premium-Men\'s-Sneakers',
        oldPrice: '9999',
        newPrice: '7999',
        rating: 4.5
    },
    {
        id: 9,
        name: 'Reebok Classic Leather',
        image: 'https://i1-c.pinimg.com/736x/7e/86/0d/7e860d07dd7a25564c863a76950bc3b8.jpg',
        oldPrice: '5999',
        newPrice: '4799',
        rating: 4.4
    },
    {
        id: 10,
        name: 'Converse Chuck 70 High Top',
        image: 'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw6c6c49c3/images/a_08/162050C_A_08X1.jpg?sw=406',
        oldPrice: '5999',
        newPrice: '4999',
        rating: 4.9
    },
    {
        id: 11,
        name: 'Vans Old Skool',
        image: 'https://i1-c.pinimg.com/736x/84/d4/e6/84d4e6506b151db050541c2b0be9cef1.jpg',
        oldPrice: '4999',
        newPrice: '3999',
        rating: 4.8
    },
    {
        id: 12,
        name: 'New Balance 574',
        image: 'https://nb.scene7.com/is/image/NB/ml574evn_nb_02_i?$pdp_main_desktop$&bgc=f1f1f1&fmt=webp&wid=740&hei=740',
        oldPrice: '8999',
        newPrice: '7199',
        rating: 4.7
    }
]

const Categories = () => {
    return (
        <section className=''>
            <div className="banner mb-5">
                <h2 className="text-left text-white ps-5">
                    HOUSE <br /> OF <span>SNEAKERS</span>
                </h2>

                <div className="category-base">
                    <img src="https://res.cloudinary.com/doqruncrn/image/upload/v1778909311/54004e8e-5e23-4514-8ddb-9e87703e066f_b6w2z9.png" alt="" />
                </div>
            </div>

            <div className="container-fluid px-5">
                {/* Row 1: 5 Products */}
                <div className="category-row-5 mb-4">
                    {shoeCategories.slice(0, 5).map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>

                {/* Row 2: 4 Products */}
                <div className="category-row-4 mb-4 ">
                    {shoeCategories.slice(5, 9).map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>

                {/* Row 3: 3 Products */}
                <div className="category-row-3 mb-4">
                    {shoeCategories.slice(9, 12).map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </section>
    )
}

const CategoryCard = ({ category }) => (
    <div className="deal-card">
        <div className="deal-image-wrapper">
            <img loading="lazy" src={category.image} alt={category.name} className="deal-image" />
            <div className="deal-overlay">
                <div className="deal-quick-actions">
                    <button className="add-to-cart-btn">
                        <i className="fa-solid fa-bag-shopping"></i>
                    </button>
                    <button title="Quick View">
                        <i className="fa-regular fa-eye"></i>
                    </button>
                    <button title="Add to Wishlist">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>

        <div className="deal-info p-3">
            <div className="d-flex justify-content-between align-items-center mb-1">
                <span className="deal-rating">
                    <i className="fa-solid fa-star text-warning me-1"></i>
                    {category.rating}
                </span>
            </div>
            <h3 className="deal-name ">{category.name}</h3>
            <div className="deal-prices d-flex align-items-center gap-2">
                <span className="new-price">
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                    {category.newPrice}
                </span>
                <span className="old-price text-muted text-decoration-line-through">
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                    {category.oldPrice}
                </span>
            </div>
        </div>
    </div>
);


export default Categories