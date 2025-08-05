import { useState } from 'react';

export default function CategoryFilter() {
  const [filters] = useState([
    { isChecked: true, name: 'smartphones' },
    { isChecked: false, name: 'laptops' },
    { isChecked: false, name: 'skincare' },
    { isChecked: false, name: 'motorcycle' },
    { isChecked: false, name: 'furniture' },
    { isChecked: false, name: 'men shirts' },
    { isChecked: false, name: 'women bags' },
  ]);
  return (
    <div>
      <div className="collapse collapse-arrow bg-white w-[256px]">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title font-semibold border-b">Categories</div>
        <div className="collapse-content text-sm flex flex-col gap-3 py-3">
          <input type="search" className="bg-[#F5F5F5] input" placeholder="Search Items" />
          {filters.map((el, index) => (
            <div className="w-full flex gap-3" key={index}>
              <label className="flex gap-3">
                <input type="checkbox" defaultChecked={el.isChecked} className="checkbox checkbox-neutral" />
                {el.name}
              </label>
            </div>
          ))}
          <button className="btn btn-neutral">Apply</button>
        </div>
      </div>
    </div>
  );
}
