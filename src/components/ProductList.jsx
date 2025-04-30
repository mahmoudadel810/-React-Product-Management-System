import { Table } from "react-bootstrap";

export function ProductList( props ) {

    let { products, onRemoveProduct } = props;
    let deleteHandler = ( productId ) => {

        onRemoveProduct( productId )
    }
    return (
        <div className="container mt-5">
            <div className="card shadow-sm">
                <div className="card-header bg-white py-3">
                    <h2 className="mb-0 text-primary fw-bold">
                        <i className="bi bi-box me-2"></i>
                        Product List
                    </h2>
                </div>
                <div className="card-body p-0">
                    {products.length === 0 ? (
                        <div className="text-center py-5">
                            <i className="bi bi-inbox display-1 text-muted"></i>
                            <p className="mt-3 text-muted">No products added yet</p>
                        </div>
                    ) : (
                        <Table striped bordered hover className="mb-0">
                            <thead className="bg-light">
                                <tr>
                                    <th className="px-4 py-3">#</th>
                                    <th className="px-4 py-3">Product Name</th>
                                    <th className="px-4 py-3">Price</th>
                                    <th className="px-4 py-3">Shipping</th>
                                    <th className="px-4 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map( ( product, index ) => (
                                    <tr key={index}>
                                        <td className="px-4 align-middle">{index + 1}</td>
                                        <td className="px-4 align-middle fw-semibold">{product.name}</td>
                                        <td className="px-4 align-middle">
                                            <span className="badge bg-primary rounded-pill">
                                                ${product.price}
                                            </span>
                                        </td>
                                        <td className="px-4 align-middle">
                                            {product.isShippingFree ? (
                                                <span className="badge bg-success">
                                                    <i className="bi bi-truck me-1"></i>
                                                    Free Shipping
                                                </span>
                                            ) : (
                                                <span className="badge bg-warning text-dark">
                                                    <i className="bi bi-cash-coin me-1"></i>
                                                    Paid Shipping
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-4 align-middle">
                                            <button 
                                                className="btn btn-danger btn-sm"
                                                onClick={() => deleteHandler(index)}
                                            >
                                                <i className="bi bi-trash me-1"></i>
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </div>
            </div>
        </div>
    )
}
