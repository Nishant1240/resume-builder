var doc = "";
// preview
function preview() {
  // default setting
  doc = new jsPDF("p", "cm", "a4");

  doc.setProperties({ title: "Preview" });

  // header
  doc.setFontSize(26);
  doc.setFont("arial");
  doc.setFontType("bold");

  doc.text(`${firstname}`, 6.5, 3.8);
  let nameWidth = doc.getTextWidth(`${firstname}`);

  doc.setTextColor(128, 128, 128);
  doc.text(`${lastname}`, 6.5 + (Math.round(nameWidth) + 0.6), 3.8);

  // lines
  doc.setLineWidth(0.01);
  doc.setDrawColor(178, 178, 178);
  doc.line(1.1, 7.5, 20, 7.5); // horizontal line
  doc.line(1.1, 11.3, 20, 11.2); // horizontal line
  doc.line(1.1, 15.5, 20, 15.5); // horizontal line
  doc.line(1.1, 22, 20, 22); // horizontal line

  doc.setTextColor(0, 0, 0);

  // draw pdf border
  doc.setLineWidth(1.1);
  doc.setDrawColor(178, 178, 178);
  doc.rect(0, 0, 21, 29.7);

  // questions
  doc.setFontSize(11);

  doc.text("Address: ", 4.5, 5);
  doc.text("Phone: ", 7.9, 5.5);
  doc.text("Email: ", 7, 6.2);
  doc.text("OBJECTIVE ", 1.2, 8.6);
  doc.text("WORK EXPERIENCE ", 1.2, 12.5);
  doc.text("EDUCATION ", 1.2, 16.6);
  doc.text("SSC, ", 5.7, 16.48);
  doc.text("HSC, ", 5.7, 17.4);
  doc.text("Bachelor Degree of Information Technology, ", 5.7, 18.8);
  doc.text("ADDITIONAL SKILLS", 1.2, 23.22);

  // per(%)
  doc.setFont("verdana");
  doc.setFontType("italic");
  doc.text("Percentage: ", 15, 16.78);
  doc.text("Percentage: ", 15, 18);
  doc.text("CGPA: ", 15, 19.5);

  // answers
  doc.setFont("verdana");
  doc.setFontType("normal");

  doc.text(`${address}`, 6.3, 5);

  doc.text(`${phone}`, 9.3, 5.5);
  doc.text(`${email}`, 8.3, 6.2);

  var splitObjective = doc.splitTextToSize(`${objective}`, 11);
  doc.text(splitObjective, 5.7, 8.6);

  var workSplitTitle = doc.splitTextToSize(
    `My work experience ${workExpYear} Year and ${workExpMonth} Month. ${workDesc}`,
    11
  );

  doc.text(workSplitTitle, 5.7, 12.4);

  doc.text(`${sscSchool}`, 6.7, 16.5);
  doc.text(`${ssc}`, 17.16, 16.8);

  doc.text(`${hscSchool}`, 6.7, 17.4);
  doc.text(`${hsc}`, 17.16, 18);

  doc.text(`${beColleage}`, 5.7, 19.3);
  doc.text(`${be}`, 16.3, 19.5);

  var splitSkills = doc.splitTextToSize(`${skills}`, 11);
  doc.text(splitSkills, 5.7, 23.22);

  window.open(doc.output("bloburl", "_blank"));
}

// download
function download() {
  // default setting
  doc = new jsPDF("p", "cm", "a4");

  doc.setProperties({ title: "Preview" });

  // header
  doc.setFontSize(26);
  doc.setFont("arial");
  doc.setFontType("bold");

  doc.text(`${firstname}`, 6.5, 3.8);
  let nameWidth = doc.getTextWidth(`${firstname}`);

  doc.setTextColor(128, 128, 128);
  doc.text(`${lastname}`, 6.5 + (Math.round(nameWidth) + 0.6), 3.8);

  // lines
  doc.setLineWidth(0.01);
  doc.setDrawColor(178, 178, 178);
  doc.line(1.1, 7.5, 20, 7.5); // horizontal line
  doc.line(1.1, 11.3, 20, 11.2); // horizontal line
  doc.line(1.1, 15.5, 20, 15.5); // horizontal line
  doc.line(1.1, 22, 20, 22); // horizontal line

  doc.setTextColor(0, 0, 0);

  // draw pdf border
  doc.setLineWidth(1.1);
  doc.setDrawColor(178, 178, 178);
  doc.rect(0, 0, 21, 29.7);

  // questions
  doc.setFontSize(11);

  doc.text("Address: ", 4.5, 5);
  doc.text("Phone: ", 7.9, 5.5);
  doc.text("Email: ", 7, 6.2);
  doc.text("OBJECTIVE ", 1.2, 8.6);
  doc.text("WORK EXPERIENCE ", 1.2, 12.5);
  doc.text("EDUCATION ", 1.2, 16.6);
  doc.text("SSC, ", 5.7, 16.48);
  doc.text("HSC, ", 5.7, 17.4);
  doc.text("Bachelor Degree of Information Technology, ", 5.7, 18.8);
  doc.text("ADDITIONAL SKILLS", 1.2, 23.22);

  // per(%)
  doc.setFont("verdana");
  doc.setFontType("italic");
  doc.text("Percentage: ", 15, 16.78);
  doc.text("Percentage: ", 15, 18);
  doc.text("CGPA: ", 15, 19.5);

  // answers
  doc.setFont("verdana");
  doc.setFontType("normal");

  doc.text(`${address}`, 6.3, 5);

  doc.text(`${phone}`, 9.3, 5.5);
  doc.text(`${email}`, 8.3, 6.2);

  var splitObjective = doc.splitTextToSize(`${objective}`, 11);
  doc.text(splitObjective, 5.7, 8.6);

  var workSplitTitle = doc.splitTextToSize(
    `My work experience ${workExpYear} Year and ${workExpMonth} Month. ${workDesc}`,
    11
  );

  doc.text(workSplitTitle, 5.7, 12.4);

  doc.text(`${sscSchool}`, 6.7, 16.5);
  doc.text(`${ssc}`, 17.16, 16.8);

  doc.text(`${hscSchool}`, 6.7, 17.4);
  doc.text(`${hsc}`, 17.16, 18);

  doc.text(`${beColleage}`, 5.7, 19.3);
  doc.text(`${be}`, 16.3, 19.5);

  var splitSkills = doc.splitTextToSize(`${skills}`, 11);
  doc.text(splitSkills, 5.7, 23.22);

  doc.save("Resume-builder.pdf");
}
