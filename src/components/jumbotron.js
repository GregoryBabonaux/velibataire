import React from 'react'
import {Link} from 'react-router-dom'

export default () => 
  <div className="jumbotron">
    <h1 className="display-3">Bienvenu(e)(s)</h1>
    <p className="lead">
      Vélibataire est une application qui permet de faire du vélo entre célibataire. 
    </p>
    <p className="lead">
      Déjà 5 investisseurs sont intéressés pour un amorçage. 
    </p>

    <p className="lead">
      Ils doivent beaucoup aimer le vélo. 
    </p>

    <p><Link to="/velos" className="btn btn-lg btn-success" role="button">Trouver un vélo </Link></p>
  </div>
