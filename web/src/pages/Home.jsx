import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const products = [
  {
    id: 1,
    name: "Smartphone Galaxy S23",
    price: "R$ 2.999,00",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    description: "Smartphone premium com câmera de alta resolução"
  },
  {
    id: 2,
    name: "Notebook Gamer",
    price: "R$ 4.599,00",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400",
    description: "Notebook para jogos com placa de vídeo dedicada"
  },
  {
    id: 3,
    name: "Fone de Ouvido Bluetooth",
    price: "R$ 299,00",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "Fone wireless com cancelamento de ruído"
  },
  {
    id: 4,
    name: "Smart TV 55\"",
    price: "R$ 3.199,00",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
    description: "TV 4K com smart features integradas"
  },
  {
    id: 5,
    name: "Tablet Pro",
    price: "R$ 1.899,00",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    description: "Tablet para produtividade e entretenimento"
  },
  {
    id: 6,
    name: "Smartwatch Fitness",
    price: "R$ 899,00",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    description: "Relógio inteligente com monitoramento de saúde"
  }
]

function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ flex: 1, width: '100%' }}>
      <h2 className="page-title">Nossos Produtos</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            onClick={() => navigate(`/product/${product.id}`)}
          />
        ))}
      </div>
    </div>
  )
}

export default Home