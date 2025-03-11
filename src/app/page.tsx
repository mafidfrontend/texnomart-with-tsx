import Categorys from "@/components/Categorys";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductsPage from "@/components/ProductsPage";
export default function Home() {
    return (
        <>
            <Hero />
            <div className="hero">
                <Navbar />
                <Categorys />
            </div>
            <main>
                <ProductsPage />
            </main>
        </>
    );
}
