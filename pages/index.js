const colors = {
  text: 'blue',
  tint: 'red'
};

export default () => (
  <div className='container'>
    <h1>Hello World</h1>

    <p>This is a <a href="#">link</a>.</p>

    <style jsx global>{`
      body {
        color: ${ colors.text };
      }

      a:link,
      a:visited {
        color: ${ colors.tint };
      }
    `}</style>
  </div>
);
