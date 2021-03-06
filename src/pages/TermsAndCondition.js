import React, { Component } from "react";
import { Container, Typography } from "@material-ui/core";
class TermsAndCondition extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Container>
        <h2 className="text-align-center p-10">Terms And Condition</h2>
        <div className="text-justify">
          <div>
            <Typography variant="body1" className="p-10">
              <strong>
                This document is an electronic record in terms of Information
                Technology Act, 2000 and rules there under as applicable and the
                amended provisions pertaining to electronic records in various
                statutes as amended by the Information Technology Act, 2000.
                This electronic record is generated by a computer system and
                does not require any physical or digital signatures.
              </strong>
            </Typography>
            <Typography variant="body1" className="p-10">
              <strong>
                This document is published in accordance with the provisions of
                Rule 3 (1) of the Information Technology (Intermediaries
                guidelines) Rules, 2011 that require publishing the rules and
                regulations, privacy policy and Terms of Use for access or usage
                of domain name{" "}
              </strong>
              [<strong>www.EGadgets.com</strong>][www.EGadgets.com]{" "}
              <strong>
                (“Website”), including the related mobile site and mobile
                application (hereinafter referred to as “Platform”){" "}
              </strong>
            </Typography>
            <Typography variant="body1" className="p-10">
              The Platform is owned by EGadgets Internet Private Limited a
              company incorporated under the Companies Act, 1956 with its
              registered office at Buildings Alyssa, Begonia &amp; Clover,
              Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
              Bengaluru – 560103, Karnataka, India and its branch offices at 2nd
              Floor, Block F (Flora), Embassy Tech Village, Outer Ring Road,
              Devarabeesanahalli Village, Bengaluru-560103, Karnataka, India
              and; 447/C, 12th Main, 4th Block, Koramangala, Bengaluru-560034,
              Karnataka, India (hereinafter referred to as "EGadgets").
            </Typography>
            <Typography variant="body1" className="p-10">
              Your use of the Platform and services and tools are governed by
              the following terms and conditions{" "}
              <strong>("Terms of Use")</strong> as applicable to the Platform
              including the applicable policies which are incorporated herein by
              way of reference. If You transact on the Platform, You shall be
              subject to the policies that are applicable to the Platform for
              such transaction. By mere use of the Platform, You shall be
              contracting with EGadgets Internet Private Limited and these terms
              and conditions including the policies constitute Your binding
              obligations, with EGadgets.
            </Typography>
            <Typography variant="body1" className="p-10">
              For the purpose of these Terms of Use, wherever the context so
              requires <strong>"You"</strong> or <strong>"User"</strong> shall
              mean any natural or legal person who has agreed to become a buyer
              on the Platform by providing Registration Data while registering
              on the Platform as Registered User using the computer systems.
              EGadgets allows the User to surf the Platform or making purchases
              without registering on the Platform. The term{" "}
              <strong>"We", "Us", "Our"</strong> shall mean EGadgets Internet
              Private Limited.
            </Typography>
            <Typography variant="body1" className="p-10">
              When You use any of the services provided by Us through the
              Platform, including but not limited to, (e.g. Product Reviews,
              Seller Reviews), You will be subject to the rules, guidelines,
              policies, terms, and conditions applicable to such service, and
              they shall be deemed to be incorporated into this Terms of Use and
              shall be considered as part and parcel of this Terms of Use. We
              reserve the right, at Our sole discretion, to change, modify, add
              or remove portions of these Terms of Use, at any time without any
              prior written notice to You. It is Your responsibility to review
              these Terms of Use periodically for updates / changes. Your
              continued use of the Platform following the posting of changes
              will mean that You accept and agree to the revisions. As long as
              You comply with these Terms of Use, We grant You a personal,
              non-exclusive, non-transferable, limited privilege to enter and
              use the Platform.
            </Typography>
            <Typography variant="body1" className="p-10">
              <strong>
                ACCESSING, BROWSING OR OTHERWISE USING THE SITE INDICATES YOUR
                AGREEMENT TO ALL THE TERMS AND CONDITIONS UNDER THESE TERMS OF
                USE, SO PLEASE READ THE TERMS OF USE CAREFULLY BEFORE PROCEEDING
              </strong>
              . By impliedly or expressly accepting these Terms of Use, You also
              accept and agree to be bound by EGadgets Policies ((including but
              not limited to Privacy Policy available at Privacy) as amended
              from time to time.
            </Typography>
          </div>
        </div>
      </Container>
    );
  }
}

export default TermsAndCondition;
