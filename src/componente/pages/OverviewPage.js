import React, { useState, useLayoutEffect, useEffect } from "react";
import { Link } from "react-router-dom";

import OverviewTable from "../pageElements/overview/OverviewTable";
import OverviewTableMobile from "../pageElements/overview/OverviewTableMobile";
//import AdminOverviewTableMobile from '../pageElements/overview/AdminOverviewTableMobile'

import UpdateIcon from "../../media/svg/icons/UpdateIcon";
import PlusIcon from "../../media/svg/icons/PlusIcon";

import Preloader from "../layout/Preloader";

import { getProductOverview } from "../../API/restPages/overviewPage.API";

const OverviewPage = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = getProductOverview().then(function (result) {
      if (result) {
        setProducts(result.articles);
        setLoading(true);
      }
    });
  }, []);

  let isMobile = false;

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  const [width, height] = useWindowSize();

  const reload = () => {
    window.location.reload();
  };

  if (width > 990) {
    isMobile = false;
  } else {
    isMobile = true;
  }
  if (loading) {
    return (
      <div className="container pb-5">
        <div className="row mt-5">
          <div className="col-lg-6">
            <h1 className="fontDarkBlue fontXl">
              Übersicht Artikel-/Syncstatus
            </h1>
            <p className="fontDarkBlue">
              Aktuellen Status Ihrer Reservierungen.
            </p>
          </div>
          <div className="col-6  col-lg-3  mt-2 mb-3">
            <button className=" fontWhite overviewButtonBlue" onClick={reload}>
              <span className="buttonIcon">
                <UpdateIcon />
              </span>
              Aktualisierung
            </button>
          </div>

          <div className="col-6  col-lg-3 mt-2 mb-3">
            <Link to={"/product"}>
              <button className=" fontWhite overviewButtonGreen">
                <span className="buttonIcon">
                  <PlusIcon />
                </span>
                Weitere kaufen
              </button>
            </Link>
          </div>
        </div>
        <div className="row mt-1">
          {isMobile ? (
            <OverviewTableMobile products={products} />
          ) : (
            <OverviewTable products={products} />
          )}
          {/*   <div className={isMobile ? 'col displayBlock' : 'col displayNone'}>
          <OverviewTableMobile />
        </div>
        <div className={isMobile ? 'col displayNone' : 'col displayBlock'}>
          <OverviewTable />
        </div> */}
        </div>
      </div>
    );
  } else {
    return <Preloader />;
  }
};

export default OverviewPage;
