import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: "Smartphone Galaxy S23",
    price: "R$ 2.999,00",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
    description: "Smartphone premium com câmera de alta resolução",
    fullDescription: "O Smartphone Galaxy S23 oferece performance excepcional com processador de última geração, câmera tripla de 108MP e bateria que dura o dia todo. Ideal para quem busca tecnologia e design.",
    specs: ["Tela 6.1' AMOLED", "256GB Armazenamento", "8GB RAM", "Câmera Tripla 108MP"]
  },
  {
    id: 2,
    name: "Notebook Gamer",
    price: "R$ 4.599,00",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600",
    description: "Notebook para jogos com placa de vídeo dedicada",
    fullDescription: "Desenvolvido para gamers exigentes, este notebook possui placa de vídeo RTX 4060, processador Intel i7 e tela de 144Hz. Experimente jogos em alta definição sem travamentos.",
    specs: ["RTX 4060 8GB", "Intel i7 13ª geração", "16GB RAM DDR5", "SSD 1TB NVMe"]
  },
  {
    id: 3,
    name: "Fone de Ouvido Bluetooth",
    price: "R$ 299,00",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    description: "Fone wireless com cancelamento de ruído",
    fullDescription: "Fone de ouvido Bluetooth com cancelamento ativo de ruído, som surround e bateria de 30 horas. Perfeito para quem busca qualidade de áudio e conforto.",
    specs: ["Bateria 30h", "Cancelamento de Ruído", "Conexão Bluetooth 5.3", "À prova d'água"]
  },
  {
    id: 4,
    name: "Smart TV 55\"",
    price: "R$ 3.199,00",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600",
    description: "TV 4K com smart features integradas",
    fullDescription: "Smart TV 55\" 4K UHD com HDR10+, sistema Android TV e assistente de voz integrado. Transforme sua sala em um cinema particular.",
    specs: ["55\" 4K UHD", "HDR10+", "Android TV", "3 HDMI, 2 USB"]
  },
  {
    id: 5,
    name: "Tablet Pro",
    price: "R$ 1.899,00",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600",
    description: "Tablet para produtividade e entretenimento",
    fullDescription: "Tablet Pro com tela de 11\", processador Snapdragon 8 Gen 2 e suporte para caneta stylus. Ideal para trabalho criativo e consumo de mídia.",
    specs: ["Tela 11\" IPS", "Snapdragon 8 Gen 2", "128GB Armazenamento", "Suporte Stylus"]
  },
  {
    id: 6,
    name: "Smartwatch Fitness",
    price: "R$ 899,00",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    description: "Relógio inteligente com monitoramento de saúde",
    fullDescription: "Smartwatch com monitoramento contínuo de saúde, GPS integrado e resistência à água. Acompanhe seus treinos e saúde 24/7.",
    specs: ["Monitor Cardíaco", "GPS Integrado", "Resistente à Água", "Bateria 7 dias"]
  }
]

function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return <div>Produto não encontrado!</div>
  }

  return (
    <div className="product-details">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Voltar para a lista
      </button>
      
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <h3>{product.price}</h3>
      
      <p>{product.fullDescription}</p>
      
      <h4>Especificações:</h4>
      <ul>
        {product.specs.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
      
      <button className="back-button" style={{marginTop: '20px'}}>
        Adicionar ao Carrinho
      </button>
    </div>
  )
}

export default ProductDetails