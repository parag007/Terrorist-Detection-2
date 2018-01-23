
/****** Object:  Database [crescent]    Script Date: 11/08/2017 18:07:43 ******/
CREATE DATABASE [crescent] 

use [crescent]

CREATE TABLE [dbo].[UserDetails](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](200) NULL,
	[MiddleName] [nvarchar](200) NULL,
	[LastName] [nvarchar](200) NULL,
	[LoginID] [nvarchar](200) NULL,
	[Password] [nvarchar](200) NULL,
	[UserType] [nvarchar](200) NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [int] NULL,
	[IsActive] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[lookUp_Master]    Script Date: 11/08/2017 18:07:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[lookUp_Master](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Level1ID] [int] NULL,
	[Level2ID] [int] NULL,
	[NameOflookUp] [nvarchar](200) NULL,
	[IsActive] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Document]    Script Date: 11/08/2017 18:07:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Document](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[DocID] [nvarchar](200) NULL,
	[DocDate] [datetime] NULL,
	[Source] [nvarchar](200) NULL,
	[Content] [nvarchar](max) NULL,
	[Phone] [nvarchar](200) NULL,
	[Misc] [nvarchar](200) NULL,
	[Person] [nvarchar](200) NULL,
	[Location] [nvarchar](200) NULL,
	[Organisation] [nvarchar](200) NULL,
	[Money] [nvarchar](200) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
