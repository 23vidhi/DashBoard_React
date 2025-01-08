import React from "react";
import {
  ShoppingCart,
  User,
  MapPin,
  ChevronLeft,
  Settings,
  Bell,
  Grid,
  Globe,
} from "lucide-react";
import CustomerImg from "../../../assets/pictures/customerPic.png";
import Shipping from "./Shipping";
import { RiErrorWarningLine } from "react-icons/ri";
import DeleteModal from "../../DeleteModal";
import EditModal from "../../EditModal";
const OrderDetails = () => {
  const orderData = {
    orderId: "32543",
    date: "Aug 17, 2025, 5:48 (ET)",
    status: { paid: true, ready: true },
    items: [
      {
        id: 1,
        name: "Leather Wallet",
        details: "Material: Leather",
        price: 943,
        qty: 2,
        total: 1886,
        image:
          "https://images-cdn.ubuy.co.in/65ab69ee77a8183e0860dc42-leather-men-s-wallet-luxury-mens-purse.jpg",
      },
    ],
    customer: {
      name: "Rohn Smith",
      id: "58909",
      orders: 1,
      email: "Rohn889@yahoo.com",
      phone: "+1 (609) 972-22-22",
      address: {
        street: "45 Roker Terrace",
        area: "Latheronwheel",
        city: "KW5 8NW,London",
        country: "UK",
      },
    },
    summary: {
      subtotal: 1886,
      discount: 2,
      tax: 28,
      total: 2113,
    },
  };
  const HandleDelete = () => {
    alert("Order deleted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-7 p-7 ">
      {/* Order Header */}
      <div className="flex justify-between  items-center mt-12 mb-3">
        <div className="">
          <h1 className="text-2xl font-semibold">Order #{orderData.orderId}</h1>
          <p className="text-gray-500">{orderData.date}</p>
        </div>
        <div className="flex gap-4">
          <span className="px-3 py-1 bg-green-100 text-green-600 rounded">
            Paid
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded">
            Ready to Pickup
          </span>
          <DeleteModal />
        </div>
      </div>

      <div className="flex gap-6">
        {/* Order Details */}
        <div className="flex-grow bg-white rounded-xl p-6 shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Order details</h2>
            <button className="text-blue-500">Edit</button>
          </div>

          <table className="w-full">
            <thead className="text-gray-500">
              <tr>
                <th className="text-left pb-4"></th>
                <th className="text-left pb-4">IMAGE</th>
                <th className="text-left pb-4">PRODUCTS</th>
                <th className="text-left pb-4">PRICE</th>
                <th className="text-left pb-4">QTY</th>
                <th className="text-left pb-4">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {orderData.items.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="py-4 ">
                    <input className=" size-4" type="checkbox" />
                  </td>
                  <td className="py-4">
                    <img
                      className="w-16 h-16 object-cover"
                      src={item.image}
                      alt={item.name}
                    />
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-6">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-500 text-sm">{item.details}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">${item.price}</td>
                  <td className="py-4">{item.qty}</td>
                  <td className="py-4">${item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="border-t mt-6 pt-4">
            <div className="flex justify-between text-gray-500 mb-2">
              <span>Subtotal:</span>
              <span>${orderData.summary.subtotal}</span>
            </div>
            <div className="flex justify-between text-gray-500 mb-2">
              <span>Discount:</span>
              <span>${orderData.summary.discount}</span>
            </div>
            <div className="flex justify-between text-gray-500 mb-2">
              <span>Tax:</span>
              <span>${orderData.summary.tax}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${orderData.summary.total}</span>
            </div>
          </div>
        </div>

        {/* Customer Details */}
        <div className="w-96">
          <div className="bg-white rounded-xl p-4 mb-6 shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Customer details</h2>
              <EditModal />
           
            </div>

            <div className="flex items-center gap-6 mb-6">
              <img
                src={CustomerImg}
                alt="customer"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-medium">{orderData.customer.name}</h3>
                <p className="text-gray-500">
                  Customer ID: #{orderData.customer.id}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-500 mb-4">
              <ShoppingCart className="w-5 h-5" />
              <span>{orderData.customer.orders} Orders</span>
            </div>
          </div>
          {/* contactinfo */}
          <div className="bg-white  shadow-md rounded-xl p-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium">Contact Info</h3>
              <EditModal />
            </div>
            <div className="space-y-4 text-gray-500">
              <p>Email: {orderData.customer.email}</p>
              <p>Mobile: {orderData.customer.phone}</p>
            </div>
          </div>

          <div className="mt-6 bg-white shadow-md rounded-xl p-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium">Shipping Address</h3>
              <EditModal />
            </div>
            <div className="text-gray-500">
              <p>{orderData.customer.address.street}</p>
              <p>{orderData.customer.address.area}</p>
              <p>{orderData.customer.address.city}</p>
              <p>{orderData.customer.address.country}</p>
            </div>
          </div>
        </div>
      </div>

      {/* shipping details */}
      <Shipping />
    </div>
  );
};

export default OrderDetails;
