import data from "./data";

function App() {
  return (
    <div>
      <header>
        <a href="/">amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((p) => (
            <div className="product" key={p.slug}>
              <a href={`/product/${p.slug}`}>
                <img src={p.image} alt={p.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${p.slug}`}>
                  <p>{p.name}</p>
                </a>
                <p>
                  <strong>${p.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
