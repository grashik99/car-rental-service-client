import { useLoaderData } from "react-router";
import CarCard from "../shared/CarCard";
import { useEffect, useState } from "react";
import CarList from "../shared/CarList";
// import bg from "../../assets/bg-long.jpg";
import Loading from "../../pages/Loading";
import ReactPaginate from "react-paginate";
import { Helmet } from "react-helmet-async";

const AvailableCars = () => {
  const carsLoad = useLoaderData();
  const [cars, setCars] = useState([]);
  const [view, setView] = useState(true);
  const [searchLoader, setSearchLoader] = useState(false);

  const handleSearch = (e) => {
    const quary = e.target.value.toLowerCase();
    console.log(typeof quary);

    if (quary === "") {
      setSearchLoader(true);
      setTimeout(() => {
        setCars(carsLoad);
        setSearchLoader(false);
      }, 1000);
    } else if (quary) {
      setSearchLoader(true);
      setTimeout(() => {
        const mached = carsLoad.filter((car) =>
          car.model.toLowerCase().includes(quary)
        );
        setCars(mached);
        setSearchLoader(false);
      }, 1000);
    }
  };


  const sortByPrice = () => {
    setSearchLoader(true)
    setTimeout(() => {
      setCars([...cars].sort((a, b) => a.price - b.price))
      setSearchLoader(false)
    }, 300)
  }

  const sortByBooking = () => {
    setSearchLoader(true)
    setTimeout(() => {
      setCars([...cars].sort((a, b) => b.bookingCount - a.bookingCount))
      setSearchLoader(false)
    }, 300)
  }




  useEffect(() => {
    setCars(carsLoad);
  }, [carsLoad]);



  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentCars = cars.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(cars.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };


  return (
    <div
      className="bg-cover bg-center min-h-[60vh]"
    >
      <Helmet>
        <title>Car Rental Service | Cars</title>
      </Helmet>
      <div className="navbar mb-4 rounded-sm contain">
        <div className="navbar-start">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={handleSearch}
              name="search"
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>
        <div className="navbar-center hidden md:flex">
          <button
            className="btn btn-primary min-w-[50px]"
            onClick={() => setView(!view)}
          >
            {view ? "List" : "Grid"}
          </button>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort by ⬇️
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm"
            >
              <li>
                <button onClick={sortByPrice}>Price</button>
              </li>
              <li>
                <button onClick={sortByBooking}>Booking</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-[8vw] pb-6 md:pb-12">
        {carsLoad.length >= 1 ? (
          searchLoader ? (
            <Loading />
          ) : (
            <>
              {view ? (
                <div className="grid md:grid-cols-3 lg:grid-cols-5 justify-between gap-4">
                  {currentCars.map((car) => (
                    <CarCard key={car._id} car={car} />
                  ))}
                </div>
              ) : (
                <div>
                  <ul className="list bg-accent/50 rounded-box shadow-md">
                    {currentCars.map((car, index) => (
                      <CarList key={car._id} car={car} index={index} />
                    ))}
                  </ul>
                </div>
              )}
            </>
          )
        ) : (
          <div className="min-h-[50vh] flex justify-center items-center">
            <h1 className="md:text-4xl">The cars will be available soon!</h1>
          </div>
        )}
      </div>


      <div className="flex justify-center md:pb-12 pb-6 ">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          previousLabel="< Prev"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          renderOnZeroPageCount={null}



          containerClassName="flex gap-2 list-none"
          pageClassName="border border-gray-300 rounded-md"
          pageLinkClassName="px-3 py-1 text-white-600 hover:bg-blue-400 hover:rounded-md block"
          activeClassName="bg-blue-500 text-white border-white"
          previousClassName="border border-gray-300 rounded-md"
          previousLinkClassName="px-3 py-1 hover:bg-gray-200 block"
          nextClassName="border border-gray-300 rounded-md"
          nextLinkClassName="px-3 py-1 hover:bg-gray-200 block"
        />
      </div>



    </div>
  );
};
export default AvailableCars;
