export type CategoryPageType = {
    slug: string;
    title: string;
};

export type ProdcutsPageType = {
    all_count: number;
    availability: string;
    axiom_monthly_price: string;
    benefit: number;
    discount_price: number;
    id: number;
    image: string;
    is_can_loan_order: number;
    name: string;
    old_price: null;
    reviews_average: null;
    reviews_count: number;
    sale_months: [];
    sale_price: number;
    stickers: [];
};

export type Mahsulotpage = {
    name: string;
    sale_price: number;
    large_images: string;
};