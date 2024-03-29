FROM node:19.0.0 as build 
WORKDIR /usr/src/app

ARG NEXT_PUBLIC_REPORT_AUTH_SERVER
ARG NEXT_PUBLIC_BOOST_HASURA
ARG NEXT_PUBLIC_REACT_APP_GOOGLE_ANALITY
ARG NEXT_PUBLIC_REACT_APP_GOOGLE_TRACKING_ID

ENV NEXT_PUBLIC_REPORT_AUTH_SERVER=${NEXT_PUBLIC_REPORT_AUTH_SERVER}
ENV NEXT_PUBLIC_BOOST_HASURA=${NEXT_PUBLIC_BOOST_HASURA}
ENV NEXT_PUBLIC_REACT_APP_GOOGLE_ANALITY=${NEXT_PUBLIC_REACT_APP_GOOGLE_ANALITY}
ENV NEXT_PUBLIC_REACT_APP_GOOGLE_TRACKING_ID=${NEXT_PUBLIC_REACT_APP_GOOGLE_TRACKING_ID}

COPY package*.json ./

COPY . ./
RUN npm install
RUN npm run build

FROM nginx:1.17.8-alpine
COPY --from=build /usr/src/app/out /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./config/default.conf /etc/nginx/conf.d/default.conf
