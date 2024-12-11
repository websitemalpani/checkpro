import Breadcrumb from '../components/Breadcrumb';
import TableOne from '../components/FilledTable';
import TableThree from '../components/FilledTable';
import TableTwo from '../components/TableTwo';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        {/* <TableThree /> */}
      </div>
    </>
  );
};

export default Tables;
