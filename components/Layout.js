import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd'
}

export const Layout = (props) => (
  <div style={ layoutStyle }>
    <Header />
    { props.children }
  </div>
);

