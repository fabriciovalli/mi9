import React from 'react';
import styled from 'styled-components';
import Box from '../components/Box';
import Button from '../components/Button';
import ColumnLayout from '../components/ColumnLayout';

const Title = styled.h1.attrs(props => ({
    className: "title has-text-centered",
}))`
    font-size: 4rem;
    font-weight: 700;
    color: #fff;
`;

const Paragraph = styled.p.attrs(props => ({
}))`
    color: #fff;
`;

const CustomButton = styled(Button)`
    float: right;
`;

const Column = styled.div.attrs(({ className }) => ({
    className: className,
}))``;

const ContentContainer = styled.div.attrs(props => ({
    className: 'content',
}))``;

const Welcome = (props) => {
    return (
        <Box primary width='60vw'>
            <ColumnLayout>
                <Column className="column is-full">
                    <Title>Welcome</Title>
                    <ContentContainer>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna duis convallis convallis tellus id interdum velit. Enim sit amet venenatis urna cursus. Congue quisque egestas diam in arcu cursus euismod. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et.
                            </Paragraph>
                        <Paragraph>
                            Eleifend mi in nulla posuere sollicitudin aliquam. Mauris ultrices eros in cursus. Velit scelerisque in dictum non. Egestas congue quisque egestas diam in arcu cursus euismod. Et netus et malesuada fames ac turpis egestas integer eget. Eget mi proin sed libero. Proin libero nunc consequat interdum varius. Sapien nec sagittis aliquam malesuada. Mattis nunc sed blandit libero. Sit amet venenatis urna cursus eget. Mollis aliquam ut porttitor leo a diam. Tellus cras adipiscing enim eu. Auctor neque vitae tempus quam. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Non diam phasellus vestibulum lorem sed risus.
                            </Paragraph>
                    </ContentContainer>
                </Column>
                <Column className="column is-4 is-offset-8">
                    <CustomButton onClick={() => props.history.push("/form")}>Next</CustomButton>
                </Column>
            </ColumnLayout>
        </Box>
    );
};

export default Welcome;