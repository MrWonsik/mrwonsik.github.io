import React from "react";
import styled from "styled-components";
import { BoldedParagraph, ItalicParagraph } from "./ParagraphsAndHeaders";

const QuoteBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const AuthorImageBox = styled.div`
  max-width: 200px;
  max-height: 200px;
  margin: 10px;
`;

const AuthorImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 40%;
`;

const SentenceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  & p {
    margin: 10px;
  }
`;

interface QuoteBoxProps {
  author: string;
  authorImageUrl: string;
  sentence: string;
}

function QuoteBox({ author, authorImageUrl, sentence }: QuoteBoxProps) {
  return (
    <QuoteBoxContainer>
      <SentenceBox>
        <ItalicParagraph>{`„${sentence}”`}</ItalicParagraph>
        <BoldedParagraph>{`~ ${author}`}</BoldedParagraph>
      </SentenceBox>
      <AuthorImageBox>
        <AuthorImage src={authorImageUrl} alt="author image" />
      </AuthorImageBox>
    </QuoteBoxContainer>
  );
}

export default QuoteBox;
