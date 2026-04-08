import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import ProductItem from "./ProductItem";
import { getProducts } from "./productHttp";
import Modal from "../modal/Modal";
import Cart from "../cart/CartItems";

export default function Product() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [openCartDialog, setOpenCartDialog] = useState(false);
  const { products, error } = useFetch(getProducts);

  function handleProductSelect(id) {
    const selectedProduct = products.find((product) => product.id === id);
    setSelectedProducts((preVal) => {
      const checkIfProductAlreadyExist = preVal.some((val) => val.id === id);
      if (!checkIfProductAlreadyExist) {
        setOpenCartDialog(true)
        return [...preVal, selectedProduct];
      } else {
        return preVal;
      }
    });
  }
  return (
    <>
      <Modal >
        <Cart selectedItems={selectedProducts} open={openCartDialog}></Cart>
      </Modal>
      <div id="meals">
        {products?.map((data) => (
          <ProductItem
            key={data.id}
            productItem={data}
            onProductSelect={handleProductSelect}
          >
            {" "}
          </ProductItem>
        ))}
      </div>
    </>
  );
}
