import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import { headers, rowData } from './table';

const WizardFormFirstPage = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th>{header.name || header.alt} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData &&
            rowData.map((rows, rowIndex) => {
              return (
                <tr key={`SpendConfiguration[${rowIndex}]`}>
                  {rows &&
                    Object.keys(rows).map((item, trIndex) => {
                      console.log(rows[item]);
                      return (
                        <td
                          key={`SpendConfiguration[${trIndex}][${item}]`}
                          data-name={`${rows['partnerType']}${item}`}
                        >
                          {/* <div className="InputDiv">
                            {' '} */}
                          <Field
                            name={`spendConfiguration[${rowIndex}][${item}]`}
                            type="text"
                            component={renderField}
                            disableCell={
                              rows[item] === '' ||
                              rows[item] === rows['partnerType']
                            }
                          />
                          {/* </div> */}
                        </td>
                      );
                    })}
                </tr>
              );
            })}
        </tbody>
      </table>

      <div>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage);
