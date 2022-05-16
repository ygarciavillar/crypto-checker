export interface CoinDetail {
    id: string,
    symbol: string,
    name: string,
    image: string,
    description: Description,
    market_data: MarketData
}

interface Description {
    en: string
    es: string
}
 
interface MarketData {
    current_price: CurrentPrice,
    market_cap: MarketCap
    market_cap_rank: number
}

interface CurrentPrice {
    eur: number
    usd: number
}

interface MarketCap {
    eur: number
    usd: number
}
