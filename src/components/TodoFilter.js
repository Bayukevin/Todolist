import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions/todoActions';

const TodoFilter = ({ filter, setFilter }) => {
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <div>
      <button
        onClick={() => handleFilterChange('all')}
        className={`btn ${filter === 'all' ? 'btn-info' : 'btn-secondary'}`}
        style={{ width: "80px", fontSize: 10, margin: 25, borderRadius: "20px", fontWeight: "bold" }}
      >
        ALL
      </button>
      <button
        onClick={() => handleFilterChange('active')}
        className={`btn ${filter === 'active' ? 'btn-info' : 'btn-secondary'}`}
        style={{ width: "80px", fontSize: 10, margin: 20, borderRadius: "20px", fontWeight: "bold" }}
      >
        ACTIVE
      </button>
      <button
        onClick={() => handleFilterChange('complete')}
        className={`btn ${filter === 'complete' ? 'btn-info' : 'btn-secondary'}`}
        style={{ width: "80px", fontSize: 10, margin: 20, borderRadius: "20px", fontWeight: "bold" }}
      >
        COMPLETE
      </button>
      <p>Current Filter: {filter}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { filter } = state.filter;
  return {
    filter
  };
};

export default connect(mapStateToProps, { setFilter })(TodoFilter);
