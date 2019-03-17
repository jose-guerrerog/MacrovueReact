import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import '../styles/style.css';
import moment from 'moment';

class ContainerData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }

  onSelectPage = (page) => {
    this.setState({ page });
  }

  render() {
    const columns = [{
      Header: 'Date',
      accessor: 'date',
      Cell: props => <span className = 'date'>{moment(`${props.value.year}-${props.value.month}-${props.value.day}`).format('YYYY-MM-DD')}</span>
    }, {
      Header: 'Type',
      accessor: 'type'
    }, {
      Header: 'Action',
      accessor: 'action'
    }, {
      Header: 'AmountAUD',
      accessor: 'amountAUD',
      textAlign: "right",
      Cell: props => <span className='number'>{props.value}</span>
    }, {
      Header: 'EndingCashAUD',
      accessor: 'endingCashAUD',
      Cell: props => <span className='number'>{props.value}</span>
    }];
    return (
      <div className="data-margin">
        <div className="react-table-desktop">
          <ReactTable
            data={this.props.data}
            columns={columns}
            page={this.state.page}
            onPageChange={this.onSelectPage}
            showPageSizeOptions={false}
            pageSize={this.props.selectedSizePage}
            className="-striped -highlight"
          />
        </div>
        <div className="react-table-mobile">
          <table className="table table-striped">
            <tbody>
              {this.props.data.map(row =>
                <tr>
                  <div className="row">
                    <div className="col-xs-3 date-mobile">
                      { moment(`${row.date.year}-${row.date.month}-${row.date.day}`).format('YYYY-MM-DD') }
                    </div>
                    <div className="col-xs-9">
                      {row.type}
                    </div>
                  </div>
                  <div className="row">{row.action}</div>
                  <div className="row bold-text">{'Amount AUD:'}<span className="green-text bold-text">{row.amountAUD}</span></div>
                  <div className="row bold-text">{'Ending Cash AUD:'}<span className="green-text">{row.endingCashAUD}</span></div>
               </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ContainerData;