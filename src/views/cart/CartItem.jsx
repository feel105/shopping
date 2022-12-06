import { useDispatch } from "react-redux";
import { removeProductCart } from "../../store/_actions/CartAction";

const CartItem = ({ data }) => {
  console.log(data, "CartItem");
  const dispatch = useDispatch();
  const removeCart = (product) => {
    dispatch(removeProductCart(product));
  };

  return (
    <div className="cart-list-item">
      <div className="cart-product">
        <div className="embed-square item-contain cart-product-img border">
          <img
            className="embed-item"
            src={`${data.thumbnail}`}
            width={90}
            height={90}
            alt={data?.title}
          />
        </div>
        <div>
          <h5>
            {data.title} ({data.brand})
          </h5>
        </div>
        <div className="show-m">
          <button className="close-btn h4">
            <i className="vm-line-close" />
          </button>
        </div>
      </div>
      <div className="cart-price">₹{data?.price}</div>
      <div className="cart-qty">
        <div className="d-flex justify-content-center">
          <div className="pro-detail-child-detail">
            <div className="quantity clearfix">{data?.cartQuantity}</div>
          </div>
        </div>
      </div>
      <div className="cart-total">
        <span className="text-primary text-nowrap">
          <span className="mr-2 show-m">Total:</span>₹
          {data?.price * data?.cartQuantity}
        </span>
      </div>
      <div className="cart-action">
        <button onClick={() => removeCart(data)} className="close-btn h4">
          <i className="fa fa-close " />
        </button>
      </div>
    </div>
  );
};
export default CartItem;
