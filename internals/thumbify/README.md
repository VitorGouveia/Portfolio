# Thumbify

On demand thumbnail as a service software.

## Why

I created this project because I was done with removing readme images from git cache and having to re-commit them. Also, managing all my repositories and making sure all readmes look the same is difficult.

## How it works

Thumbify uses Next.js OG Image generation to create images with react and serve them to the client. [More about it here](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation)

## Usage

The usage is very simple, you just supply query parameters to the thumify api url and it generates an image following a design from my figma.

### Query Parameters

| **Name**    | **Description**                              |
| ----------- | -------------------------------------------- |
| title       | The name of the github repo                  |
| company     | which company owns that project              |
| description | a brief description of the project           |
| coverUrl    | a URL of a image to be used inside the cover |

## Examples

![cover](https://thumbify.vercel.app/api/thumbnail.png?company=digicode&title=project%20model&description=hello%20world&coverUrl=https://jornaltribuna.com.br/wp-content/uploads/2022/08/4fc927d6-2385-4cbf-ab9d-574556fcb1f6-1.jpg)
