import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link as PDFLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  heading: { fontSize: 12, marginBottom: 6, fontWeight: 'bold' },
  text: { fontSize: 8 },
  phone: { fontSize: 8, fontWeight: 'bold' },
  linksRow: { flexDirection: 'row', flexWrap: 'wrap', fontSize: 8, color: 'blue' },
  link: { fontSize: 8, color: 'blue', textDecoration: 'underline', marginRight: 6 },
  bullet: { fontSize: 8, marginRight: 6 },
  line: { borderBottomColor: '#000', borderBottomWidth: 1, marginVertical: 6 },
  margin: { marginTop: 30 },
});

const ResumeDocument = ({ form }) => {
  const links = [
    form.linkedin && { label: 'LinkedIn', src: form.linkedin },
    form.github && { label: 'Github', src: form.github },
    form.twitter && { label: 'Twitter', src: form.twitter },
    form.codeforces && { label: 'Codeforces', src: form.codeforces },
    form.leetcode && { label: 'Leetcode', src: form.leetcode },
    form.personalPortfolio && { label: 'Portfolio', src: form.personalPortfolio },
  ].filter(Boolean);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>{form.name}</Text>
          <Text style={styles.text}><Text style={styles.phone}>Phone:</Text> {form.phone}</Text>
          <Text style={styles.text}><Text style={styles.phone}>Email:</Text> {form.email}</Text>
          <View style={styles.linksRow}>
            {links.map((item, index) => (
              <React.Fragment key={item.label}>
                {index > 0 && <Text style={styles.bullet}>•</Text>}
                <PDFLink src={item.src} style={styles.link}>{item.label}</PDFLink>
              </React.Fragment>
            ))}
          </View>
        </View>

        {form.careerObjective && (
          <View style={[styles.section, styles.margin]}>
            <Text style={styles.heading}>PROFESSIONAL SUMMARY</Text>
            <View style={styles.line} />
            <Text style={styles.text}>{form.careerObjective}</Text>
          </View>
        )}

        {form.academicQualification && form.academicQualification.length > 0 && (
          <View style={[styles.section, styles.margin]}>
            <Text style={styles.heading}>EDUCATION</Text>
            <View style={styles.line} />
            {form.academicQualification.map((edu, idx) => (
              <View key={idx}>
                <Text style={styles.text}>{edu.degree} - {edu.institution}</Text>
                <Text style={styles.text}>{edu.year}</Text>
              </View>
            ))}
          </View>
        )}

        {form.workExperience && form.workExperience.length > 0 && (
          <View style={[styles.section, styles.margin]}>
            <Text style={styles.heading}>EXPERIENCE</Text>
            <View style={styles.line} />
            {form.workExperience.map((exp, idx) => (
              <View key={idx}>
                <Text style={styles.text}>{exp.jobTitle} - {exp.company}</Text>
                <Text style={styles.text}>{exp.duration}</Text>
                <Text style={styles.text}>{exp.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* {form.skills && form.skills.length > 0 && (
          <View style={[styles.section, styles.margin]}>
            <Text style={styles.heading}>SKILLS</Text>
            <View style={styles.line} />
            <Text style={styles.text}>{form.skills.join(', ')}</Text>
          </View>
        )} */}

        {form.projects && form.projects.length > 0 && (
          <View style={[styles.section, styles.margin]}>
            <Text style={styles.heading}>PROJECTS</Text>
            <View style={styles.line} />
            {form.projects.map((proj, idx) => (
              <View key={idx}>
                <Text style={styles.text}>{proj.projectName}</Text>
                <Text style={styles.text}>{proj.projectDate}</Text>
                <Text style={styles.text}>{proj.description}</Text>
              </View>
            ))}
          </View>
        )}

        {form.certificates && form.certificates.length > 0 && (
          <View style={[styles.section, styles.margin]}>
            <Text style={styles.heading}>CERTIFICATES</Text>
            <View style={styles.line} />
            {form.projects.map((certi, idx) => (
              <View key={idx}>
                <Text style={styles.text}>{certi.certificateName}</Text>
                <Text style={styles.text}>{certi.issuer}</Text>
                <Text style={styles.text}>{certi.certificateDate}</Text>
              </View>
            ))}
          </View>
        )}

        </Page>
    </Document>
  );
};

export default ResumeDocument;