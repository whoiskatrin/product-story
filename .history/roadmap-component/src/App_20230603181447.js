function App({ data, style }) {
  return (
    <div style={style}>
      <Accordion type="single">
        {data.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionButton>{item.title}</AccordionButton>
            <AccordionPanel>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {/* Render additional custom fields */}
                {Object.entries(item).map(([field, value]) => {
                  // Skip title and description fields
                  if (field === "title" || field === "description") {
                    return null;
                  }
                  return (
                    <div key={field}>
                      <strong>{field}: </strong>
                      <span>{value}</span>
                    </div>
                  );
                })}
              </div>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
