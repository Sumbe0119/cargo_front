import React from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../components/utils/common";
import moment from "moment";

const Address = () => {
  return (
    <div className="container xs:px-4 lg:px-0 xs:space-y-3 lg:space-y-12">
      <h1 className="grid gap-1 leading-3">
        <span className="text-sm font-medium text-black">
          Агуулахын жагсаалт
        </span>
        <span className="text-base leading-tight font-semibold text-primary">
          Та өөрт тохирох агуулхыг сонгоорой
        </span>
      </h1>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xs:gap-3 lg:gap-6">
        {[1, 2, 3, 4].map((item: any, index: number) => {
          return (
            <Link
              key={`branch_${index}`}
              to={`/branch/${index}`}
              className="rounded-lg overflow-hidden border border-light relative hover:border-primary transition-all"
            >
              <div className="relative">
                <img
                  className="xs:aspect-[3/1] lg:aspect-[2/1] object-cover object-center"
                  alt={item.title}
                  src={`https://img.yicaiglobal.com/src/image/2024/09/65127778471621.jpg`}
                />
              </div>

              <div className={`p-4 grid gap-1 text-black`}>
                <h6 className="text-base text-primary font-medium line-clamp-1 uppercase">
                  Хан уул дүүрэг салбар
                </h6>
                <span className="text-sm font-regular h-11 line-clamp-3">
                  ХУД 4-р хороо Хүннүмол төвын 1 лавхар 102тоот
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Address;
