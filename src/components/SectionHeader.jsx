import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const SectionHeader = ({ section, sectionTotal }) => {
  
  // Tooltip for the section header
  const renderTooltipForTotal = (props) => (
    <Tooltip id="total-tooltip" {...props}>
      Total cost for this section: ${sectionTotal.toFixed(2)}
    </Tooltip>
  );

  const renderTooltipForSection = (props) => (
    <Tooltip id="section-name-tooltip" {...props}>
      Section: {section.section_name}
    </Tooltip>
  );

  return (
    <div className="d-flex flex-sm-row flex-column justify-content-between custom-bg align-items-start align-items-md-center px-2 py-2 gap-2 header">
      <OverlayTrigger
        placement="top"
        overlay={renderTooltipForSection}
      >
        <h4 className="p-0 m-0 table-header">{section.section_name}</h4>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        overlay={renderTooltipForTotal}
      >
        <h5 className="p-0 m-0 table-header">
          Total - ${sectionTotal.toFixed(2)}
        </h5>
      </OverlayTrigger>
    </div>
  );
};

export default SectionHeader;
