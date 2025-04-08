import React, { useMemo } from 'react';
import { Document, Page, Text, View, StyleSheet, Link} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  heading: { fontSize: 12, marginBottom: 6, fontWeight: 'bold' },
  text: { fontSize: 8 },
  summary: {marginBottom: 10, marginTop: 30},
  phone: { fontSize: 8, fontWeight: 'bold' },
  linksRow: { flexDirection: 'row', flexWrap: 'wrap', fontSize: 8, color: 'blue' },
  link: { fontSize: 8, color: 'blue', textDecoration: 'underline', marginRight: 6 },
  bullet: { fontSize: 8, marginRight: 6 },
  line: { borderBottomColor: '#000', borderBottomWidth: 1, marginVertical: 6 },
  margin: { marginTop: 30 },
});




const ResumeDocument = ({ form }) => {
    var Documentt = useMemo(() => Document, [])
  return typeof window !== 'undefined' && (
    <Documentt>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>{form.name}</Text>
          {form.phone ? (<Text style={styles.text}><Text style={styles.phone}>Phone:</Text> {form.phone}</Text>) : ''}
          {form.email ? (<Text style={styles.text}><Text style={styles.phone}>Email:</Text> {form.email}</Text>) : ''}
        </View>
        <View style={styles.linksRow}>
            {form.linkedin ? (<Link style={styles.link} src={form.linkedin}>LinkedIn</Link>) : ''}
            {form.github ? (<Link style={styles.link} src={form.github}>GitHub</Link>) : ''}
            {form.twitter ? (<Link style={styles.link} src={form.twitter}>Twitter</Link>) : ''}
            {form.codeforces ? (<Link style={styles.link} src={form.codeforces}>CodeForces</Link>) : ''}
            {form.leetcode ? (<Link style={styles.link} src={form.leetcode}>Leetcode</Link>) : ''}
            {form.personalPortfolio ? (<Link style={styles.link} src={form.personalPortfolio}>Portfolio</Link>) : '' }
        </View>

        {form.careerObjective ? (<View style={styles.summary}>
            <Text style={styles.heading}>PROFESSIONAL SUMMARY</Text>
            <View style={styles.line} />
            <Text style={styles.text}>{form.careerObjective}</Text>
        </View>): ''}

        {form?.academicQualification?.length > 0 ? (
          <View style={styles.summary}>
            <Text style={styles.heading}>EDUCATION</Text>
            <View style={styles.line} />
            {form.academicQualification.map((edu, idx) => (
            <View key={idx} style={{}}>
                <Text style={styles.text}>{edu?.degree+" - "+edu?.institution}</Text>
                <Text style={styles.text}>{edu?.year}</Text>
              </View>
            ))}
        </View>
        ): ''}

        {form?.workExperience?.length > 0 ? (
          <View style={styles.summary}>
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
        ): ''}

        {form?.projects?.length > 0 ? (
          <View style={styles.summary}>
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
        ):''}

        {form.certificates && form.certificates.length > 0 ? (
          <View style={styles.summary}>
            <Text style={styles.heading}>CERTIFICATES</Text>
            <View style={styles.line} />
            {form.certificates.map((certi, idx) => (
              <View key={idx}>
                <Text style={styles.text}>{certi.certificateName}</Text>
                <Text style={styles.text}>{certi.issuer}</Text>
                <Text style={styles.text}>{certi.certificateDate}</Text>
              </View>
            ))}
          </View>
        ):''}

      </Page>
    </Documentt>
  );
};

export default ResumeDocument;