const React = require('react')


class DefaultLayout extends React.Component {

    render() {
        return (
            // this is where we build wrapper for html
            //   {this.props.children}  all components will be inside here
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/styles.css" />
                </head>
                <body>
                <div className='top'>
              <nav>
                    <a href="/fruits">Fruits Index</a>&nbsp;&nbsp;<a href="/meat">Meat Index</a>&nbsp;&nbsp;<a href="/vegetables">Vegetables Index</a>
                </nav>
              </div>
                    {this.props.children} 
                </body>
            </html>
        )
    }

}

module.exports = DefaultLayout;
