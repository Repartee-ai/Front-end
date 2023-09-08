import React from 'react';
import { EarningData, EarningGrid} from '../data/dummy';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Toolbar } from '@syncfusion/ej2-react-grids';

const Earning = () => {
    const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };
  const settings = { wrapMode: "Content" };
  return (
    <div id = "Current Earning">
      <div className=" mb-5 mt-10">
        <p className="text-2xl font-extrabold tracking-tight text-slate-900">
          
          Current Earning
        </p>
        <p className="text-lg text-gray-400">Fees and metered feature usage </p>
      </div>

      <div className="drop-shadow-[0px_5px_5px_rgba(0,0,0,0.15)]">
        

      <GridComponent
        rowHeight={100}
        dataSource={EarningData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
        
        allowTextWrap={true}
        textWrapSettings={settings}
      >
      
        <ColumnsDirective >
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {EarningGrid.map((item, index) => <ColumnDirective clipMode='EllipsisWithTooltip' key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar]} />

      </GridComponent>

      </div>
    </div>
  )
}

export default Earning