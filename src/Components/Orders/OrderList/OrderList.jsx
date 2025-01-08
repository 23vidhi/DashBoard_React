import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxDotsVertical } from "react-icons/rx";

const sampleProducts = [
  { name: "iPhone 14 Pro", category: "Electronics" },
  { name: "Nike Air Max", category: "Footwear" },
  { name: "Samsung 4K TV", category: "Electronics" },
  { name: "Levi's 501 Jeans", category: "Clothing" },
  { name: "MacBook Pro", category: "Electronics" },
  { name: "Sony Headphones", category: "Electronics" },
  { name: "Adidas Running Shoes", category: "Footwear" },
  { name: "Cotton T-Shirt", category: "Clothing" },
  { name: "Gaming Monitor", category: "Electronics" },
  { name: "Leather Wallet", category: "Accessories" },
];

const StatCard = ({ value, title }) => (
  <div className="min-h-[100px] bg-white rounded-xl shadow-sm p-4 flex flex-col justify-center items-center m-2">
    <h3 className="text-2xl font-semibold text-gray-800 mb-1">{value}</h3>
    <p className="text-sm text-gray-600">{title}</p>
  </div>
);

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [id, setId] = useState(null);

  const itemsPerPage = 5;
  const navigate = useNavigate();

  // const status = [
  //   [
  //     (status = "Out for Delivery"),
  //     (count = 10),
  //     (color = "bg-violet-500 text-violet-800"),
  //   ],
  //   [
  //     (status = "Dispatched"),
  //     (count = 15),
  //     (color = " bg-orange-300 text-orange-800"),
  //   ],

  //   [
  //     (status = "Delivered"),
  //     (count = 15),
  //     (color = "bg-green-500 text-green-800"),
  //   ],

  //   [
  //     (status = "Ready to pickup"),
  //     (count = 20),
  //     (color = "bg-blue-500 text-blue-800"),
  //   ],
  // ];

  const HandleButton = (orderid) => {
    console.log(orderid);
    id === null || orderid !== id ? setId(orderid) : setId(null);
  };
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts`
        );
        if (!response.ok) throw new Error("Failed to fetch orders");
        const data = await response.json();

        const transformedData = data.slice(0, 50).map((item) => {
          const randomProduct =
            sampleProducts[Math.floor(Math.random() * sampleProducts.length)];
          return {
            id: item.id,
            title: randomProduct.name,
            price: (Math.random() * 1000 + 50).toFixed(2),
            category: randomProduct.category,
            status: "",
            count: "",
          };
        });

        setOrders(transformedData);
        setTotalPages(Math.ceil(transformedData.length / itemsPerPage));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  const filteredOrders = orders.filter((order) =>
    order.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[600px]">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-blue-1500 rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 p-4 text-center">Error: {error}</div>;
  }

  return (
    <div className="w-[100%] px-7 py-20 space-y-5 ">
      <div className="flex flex-wrap justify-between bg-white shadow rounded-md">
        <StatCard value="56" title="Pending Payment" />
        <StatCard value="12,689" title="Completed" />
        <StatCard value="124" title="Refunded" />
        <StatCard value="32" title="Failed" />
      </div>

      <div className="mb-8 bg-white shadow-md rounded-md">
        <input
          type="text"
          placeholder="Search orders..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
        />

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mt-1  ">
          <div className="overflow-x-auto">
            <table className="w-full h-96">
              <thead className="bg-gray-50 border-b border-gray-200 relative">
                <tr>
                  <th className="w-16 p-4">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-600">
                    ORDER
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-600">
                    DATE
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-600">
                    PRODUCT NAME
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-600">
                    PRICE ($)
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-600">
                    CATEGORY
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-600">
                    STATUS
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-600">
                    PAYMENT
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-600">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paginatedOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="w-16 p-4">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />
                    </td>
                    <td className="p-4 text-sm text-violet-600 font-semibold">
                      #{order.id}
                    </td>
                    <td className="p-4 text-sm text-gray-500 font-semibold">
                      {currentDate}
                    </td>
                    <td className="p-4 text-sm text-gray-800 font-semibold">
                      {order.title}
                    </td>
                    <td className="p-4 text-sm text-red-400 font-semibold">
                      ${order.price}
                    </td>
                    <td className="p-4 text-sm text-blue-600 font-semibold">
                      {order.category}
                    </td>
                    <td className="p-4 text-sm text-lime-600 font-semibold">
                      Delivered
                    </td>
                    <td className="p-4 text-sm text-lime-600  font-semibold">
                      Paid
                    </td>

                    <td className="p-4 text-sm text-gray-900">
                      <div className="flex  items-center gap-2 justify-center ">
                        <button
                          className=""
                          type="button"
                          onClick={() => HandleButton(order.id)}
                        >
                          <RxDotsVertical />
                        </button>

                        <div className="bg-transparent rounded-md h-15 w-20 ml-5  flex justify-center px-3">
                          {id === order.id && (
                            <button
                              onClick={() =>
                                navigate(`/OrderDetails?${order.id}`)
                              }
                              className=" h-6  flex justify-center w-13 text-xs px-1 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
                            >
                              View
                            </button>
                          )}
                          {id === order.id && (
                            <button
                              onClick={() => handleDelete(order.id)}
                              className=" h-6 w-12 flex justify-center text-xs px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                              Delete
                            </button>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-200 flex-wrap">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 hover:bg-gray-50"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .slice(
                  Math.max(0, currentPage - 3),
                  Math.min(totalPages, currentPage + 2)
                )
                .map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === page
                        ? "bg-blue-500 text-white"
                        : "border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
