import axios from 'axios';
import { useEffect, useState } from 'react';
import { activeCategory, domain } from '../store';

export default function CategoryFilter() {
  const [filters, setFilters] = useState([]);
  const { selectCategoty, value } = activeCategory();
  useEffect(() => {
    if (value == null) {
      axios.get(domain + '/api/categories').then((res) => {
        setFilters(res.data.data);
      });
    }
  }, [value]);

  return (
    <div>
      <div className="collapse collapse-arrow bg-white w-[256px]">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title font-semibold border-b">Categories</div>
        <div className="collapse-content text-sm flex flex-col gap-3 py-3">
          <input type="search" className="bg-[#F5F5F5] input" placeholder="Search Items" />
          {filters.map((el) => (
            <div className="w-full flex gap-3" key={el.documentId}>
              <label className="flex gap-3">
                <input onChange={() => selectCategoty(el)} defaultChecked={false} type="radio" name="cat" className="checkbox checkbox-neutral" />
                {el.name}
              </label>
            </div>
          ))}
          <button className="btn btn-neutral" onClick={() => selectCategoty(null)}>
            Reset Products
          </button>
        </div>
      </div>
    </div>
  );
}

// product => cat

// cat => Products

// All filter with
