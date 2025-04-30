import React, { useState } from 'react'
import { ProductForm } from '../components/ProductForm'
import { ProductList } from '../components/ProductList'
import Joi from 'joi'

export function ProductPage() {
    let [products, setProducts] = useState([])
    let [errors, setErrors] = useState(null)

    const productSchema = Joi.object({
        name: Joi.string()
            .min(3)
            .max(30)
            .required()
            .messages({
                'string.empty': 'Product name is required',
                'string.min': 'Product name must be at least 3 characters',
                'string.max': 'Product name cannot exceed 30 characters'
            }),
        price: Joi.number()
            .positive()
            .required()
            .messages({
                'number.base': 'Price must be a number',
                'number.positive': 'Price must be positive',
                'any.required': 'Price is required'
            }),
        isShippingFree: Joi.boolean()
    })

    let addNewProduct = (product) => {
        const productToValidate = {
            ...product,
            price: product.price === '' ? undefined : Number(product.price)
        }

        const { error } = productSchema.validate(productToValidate, { abortEarly: false })
        
        if (error) {
            const validationErrors = {}
            error.details.forEach(detail => {
                validationErrors[detail.path[0]] = detail.message
            })
            setErrors(validationErrors)
            return false
        }

        setErrors(null)
        setProducts([...products, productToValidate])
        return true
    }

    let removeProduct = (productId) => {
        setProducts(products.filter((_, index) => index !== productId))
    }

    return (
        <div className="min-vh-100 bg-light py-5">
            <div className="container">
                <ProductForm onAddProduct={addNewProduct} validationErrors={errors} />
                <ProductList products={products} onRemoveProduct={removeProduct} />
            </div>
        </div>
    )
}
