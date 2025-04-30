/** @format */

import { useEffect, useRef, useState } from "react";

export function ProductForm(props) {
  let myRef = useRef();
  let { onAddProduct, validationErrors } = props;

  let [formValues, setFormValues] = useState({
    name: "",
    price: "",
    isShippingFree: false,
  });

  useEffect(() => {
    myRef.current.focus();
  }, []);

  let getInputValue = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]:
        e.target.name == "isShippingFree" ? e.target.checked : e.target.value,
    });
  };

  let productHandler = (e) => {
    e.preventDefault();
    const success = onAddProduct(formValues);

    if (success) {
      setFormValues({
        name: "",
        price: "",
        isShippingFree: false,
      });
    }
  };
  return (
    <div className="container py-5 px-4 bg-light rounded-3 shadow-sm">
      <h1 className="text-center mb-4 text-primary fw-bold">Add New Product</h1>

      <form className="mt-4" onSubmit={productHandler}>
        <div className="mb-4">
          <label className="form-label fw-semibold">Product Name</label>
          <input
            ref={myRef}
            onChange={getInputValue}
            type="text"
            name="name"
            value={formValues.name}
            placeholder="Enter Product Name"
            className={`form-control form-control-lg shadow-sm ${
              validationErrors?.name ? "is-invalid" : ""
            }`}
          />
          {validationErrors?.name && (
            <div className="invalid-feedback d-block">
              <i className="bi bi-exclamation-circle me-1"></i>
              {validationErrors.name}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Product Price</label>
          <div className="input-group input-group-lg">
            <span className="input-group-text">$</span>
            <input
              onChange={getInputValue}
              type="number"
              value={formValues.price}
              name="price"
              placeholder="Enter Product Price"
              className={`form-control shadow-sm ${
                validationErrors?.price ? "is-invalid" : ""
              }`}
            />
          </div>
          {validationErrors?.price && (
            <div className="invalid-feedback d-block">
              <i className="bi bi-exclamation-circle me-1"></i>
              {validationErrors.price}
            </div>
          )}
        </div>

        <div className="mb-4">
          <div className="form-check form-switch">
            <input
              onChange={getInputValue}
              type="checkbox"
              checked={formValues.isShippingFree}
              name="isShippingFree"
              className="form-check-input"
              id="shippingSwitch"
            />
            <label
              className="form-check-label fw-semibold"
              htmlFor="shippingSwitch">
              Free Shipping
            </label>
          </div>
        </div>

        <button
          className="btn btn-primary btn-lg w-100 shadow-sm"
          type="submit">
          <i className="bi bi-plus-circle me-2"></i>
          Add New Product
        </button>
      </form>
    </div>
  );
}
