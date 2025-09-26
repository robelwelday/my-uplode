import React from "react";

export default function ProductsPreview({ products, lang }) {
  console.log(products); // Debugging: Log the products array
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto overflow-x-hidden">
      {products.map((p) => (
        <div key={p._id} className="bg-white p-4 rounded shadow hover:shadow-lg transition h-full flex flex-col overflow-hidden min-w-0">
          <img src={`http://localhost:5000${p.image}`} alt={p.name?.[lang] || p.name?.en || "Product Image"} className="w-full h-48 object-cover rounded mb-4" />
          <h4 className="text-xl font-bold mb-2 break-words overflow-wrap-anywhere">{p.name?.[lang] || p.name?.en || "Untitled Product"}</h4>
          <Link
            to={`/products/${p._id}`}
            className="text-blue-600 hover:underline mt-auto"
          >
            See More
          </Link>
        </div>
      ))}
    </div>
  );
}
