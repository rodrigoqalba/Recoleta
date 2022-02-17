import React from 'react';
import './CompanyInfo.css'


 const CompanyInfo = ({product}) => {
     return(
        <div className='company'>
            <h1 className='name'>{product.company.name}</h1>
            <div className='line'></div>
            <div className='company-info-left'>
                <div>
                    <h3>Country: {product.company.country}</h3>
                </div>
                <br></br>
                <div>
                    <h3>City: {product.company.city}</h3>
                </div>
                <br></br>
                <div>
                    <h3>E-mail: {product.company.email}</h3>
                </div>
                <br></br>
                <div>
                    <h3># of Products: {product.company.num_of_products}</h3>
                </div>
                <br></br>
            </div>
        </div>
     )
 }

 export default CompanyInfo;